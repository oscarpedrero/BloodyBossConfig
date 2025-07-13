use crate::models::{BossEncounter, ValidationResult};
use std::fs;
use std::path::PathBuf;
use tauri::State;
use anyhow::Result;
use serde_json;
use std::collections::HashMap;

pub struct AppState {
    pub config_path: PathBuf,
}

#[tauri::command]
pub async fn load_boss_config(state: State<'_, AppState>) -> Result<Vec<BossEncounter>, String> {
    let boss_file = state.config_path.join("BloodyBoss").join("Bosses.json");
    
    // If file doesn't exist, return empty list
    if !boss_file.exists() {
        eprintln!("Bosses.json does not exist at: {:?}", boss_file);
        return Ok(Vec::new());
    }
    
    eprintln!("Loading boss config from: {:?}", boss_file);
    
    // Read and parse the file
    let content = fs::read_to_string(&boss_file)
        .map_err(|e| format!("Failed to read Bosses.json: {}", e))?;
    
    // Debug: Print raw JSON content length and a preview
    println!("Raw JSON content length: {} bytes", content.len());
    println!("Raw JSON preview (first 500 chars): {}", 
        &content.chars().take(500).collect::<String>());
    
    // Parse the JSON with detailed error handling
    let bosses: Vec<BossEncounter> = match serde_json::from_str(&content) {
        Ok(bosses) => bosses,
        Err(e) => {
            eprintln!("Direct parsing failed, trying conversion: {}", e);
            
            // Try to parse as generic JSON and convert
            match serde_json::from_str::<serde_json::Value>(&content) {
                Ok(json_value) => {
                    if let Some(array) = json_value.as_array() {
                        eprintln!("Found JSON array with {} bosses, attempting conversion...", array.len());
                        
                        let mut converted_bosses = Vec::new();
                        for (index, boss_json) in array.iter().enumerate() {
                            match try_convert_old_boss_format(boss_json) {
                                Ok(boss) => {
                                    eprintln!("Successfully converted boss at index {}", index);
                                    converted_bosses.push(boss);
                                },
                                Err(err) => {
                                    eprintln!("Failed to convert boss at index {}: {}", index, err);
                                    // Get more specific error info
                                    let boss_name = boss_json.get("name").and_then(|n| n.as_str()).unwrap_or("Unknown");
                                    let mut field_info = Vec::new();
                                    
                                    // Check specific fields that might be problematic
                                    if let Some(obj) = boss_json.as_object() {
                                        if let Some(mult) = obj.get("multiplier") {
                                            field_info.push(format!("multiplier={:?}", mult));
                                        }
                                        if let Some(items) = obj.get("items").and_then(|v| v.as_array()) {
                                            for (i, item) in items.iter().enumerate() {
                                                if let Some(chance) = item.get("Chance") {
                                                    field_info.push(format!("items[{}].Chance={:?}", i, chance));
                                                }
                                            }
                                        }
                                    }
                                    
                                    return Err(format!(
                                        "Failed to convert boss '{}' at index {}.\nField values: {}\nError: {}", 
                                        boss_name,
                                        index,
                                        field_info.join(", "),
                                        err
                                    ));
                                }
                            }
                        }
                        
                        if !converted_bosses.is_empty() {
                            eprintln!("Successfully converted {} bosses from old format", converted_bosses.len());
                            converted_bosses
                        } else {
                            return Err(format!("No bosses could be converted from the file"));
                        }
                    } else {
                        return Err(format!("Expected JSON array but found: {:?}", json_value));
                    }
                },
                Err(json_err) => {
                    return Err(format!(
                        "Failed to parse Bosses.json at line {}, column {}: {}. JSON parse error: {}",
                        e.line(), e.column(), e, json_err
                    ));
                }
            }
        }
    };
    
    // Debug: Print parsed information
    println!("Successfully parsed {} bosses", bosses.len());
    
    // Debug: Print details of the first boss if available
    if let Some(first_boss) = bosses.first() {
        println!("First boss details:");
        println!("  Name: {}", first_boss.name);
        println!("  PrefabGUID: {}", first_boss.prefab_guid);
        println!("  Mechanics count: {}", first_boss.mechanics.len());
        
        // Print mechanics details
        if !first_boss.mechanics.is_empty() {
            println!("  Mechanics:");
            for (idx, mechanic) in first_boss.mechanics.iter().enumerate() {
                println!("    [{}] Type: {}, Enabled: {}, ID: {}", 
                    idx, mechanic.mechanic_type, mechanic.enabled, mechanic.id);
            }
        } else {
            println!("  No mechanics found for this boss!");
        }
        
        // Also check the raw JSON for "Mechanics" field
        if let Ok(raw_json) = serde_json::from_str::<serde_json::Value>(&content) {
            if let Some(bosses_array) = raw_json.as_array() {
                if let Some(first_boss_raw) = bosses_array.first() {
                    if let Some(mechanics_raw) = first_boss_raw.get("Mechanics") {
                        println!("  Raw JSON Mechanics field: {:?}", mechanics_raw);
                    } else {
                        println!("  WARNING: No 'Mechanics' field found in raw JSON!");
                    }
                }
            }
        }
    }
    
    Ok(bosses)
}

#[tauri::command]
pub async fn save_boss_config(
    bosses: Vec<BossEncounter>,
    state: State<'_, AppState>
) -> Result<(), String> {
    let boss_dir = state.config_path.join("BloodyBoss");
    
    // Create directory if it doesn't exist
    if !boss_dir.exists() {
        fs::create_dir_all(&boss_dir)
            .map_err(|e| format!("Failed to create directory: {}", e))?;
    }
    
    // Create backup
    let boss_file = boss_dir.join("Bosses.json");
    if boss_file.exists() {
        let backup_name = format!("Bosses.backup.{}.json", chrono::Utc::now().timestamp());
        let backup_file = boss_dir.join(backup_name);
        fs::copy(&boss_file, &backup_file)
            .map_err(|e| format!("Failed to create backup: {}", e))?;
    }
    
    // Save new config
    let json = serde_json::to_string_pretty(&bosses)
        .map_err(|e| format!("Failed to serialize bosses: {}", e))?;
    
    fs::write(&boss_file, json)
        .map_err(|e| format!("Failed to write boss file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
pub async fn validate_boss(boss: BossEncounter) -> Result<ValidationResult, String> {
    let mut errors = Vec::new();
    let mut warnings = Vec::new();
    
    // Validate required fields
    if boss.name.is_empty() {
        errors.push("Boss name is required".to_string());
    }
    
    if boss.prefab_guid == 0 {
        errors.push("Prefab GUID is required".to_string());
    }
    
    if boss.level == 0 {
        errors.push("Boss level must be greater than 0".to_string());
    }
    
    if boss.multiplier == 0 {
        errors.push("Boss multiplier must be greater than 0".to_string());
    }
    
    // Validate lifetime
    if boss.lifetime == 0.0 {
        warnings.push("Boss has no lifetime set (infinite spawn)".to_string());
    }
    
    // Validate items
    for item in &boss.items {
        if item.chance > 100 {
            warnings.push(format!("Item {} has a chance > 100%", item.name));
        }
        
        if item.stack == 0 {
            errors.push(format!("Item {} has invalid stack size", item.name));
        }
    }
    
    // Validate coordinates
    if boss.x == 0.0 && boss.y == 0.0 && boss.z == 0.0 {
        warnings.push("Boss spawn location is at origin (0,0,0)".to_string());
    }
    
    Ok(ValidationResult {
        valid: errors.is_empty(),
        errors: if errors.is_empty() { None } else { Some(errors) },
        warnings: if warnings.is_empty() { None } else { Some(warnings) },
    })
}

#[tauri::command]
pub async fn import_bosses_file(path: String) -> Result<Vec<BossEncounter>, String> {
    println!("Importing bosses from: {}", path);
    
    let mut content = fs::read_to_string(&path)
        .map_err(|e| format!("Failed to read file '{}': {}", path, e))?;
    
    println!("File content length: {} bytes", content.len());
    
    // Try to fix common JSON formatting issues
    eprintln!("Checking for common JSON formatting issues...");
    
    // Remove trailing commas before closing brackets/braces
    content = content.replace(",\n]", "\n]");
    content = content.replace(",\r\n]", "\n]");
    content = content.replace(",]", "]");
    content = content.replace(",\n}", "\n}");
    content = content.replace(",\r\n}", "\n}");
    content = content.replace(",}", "}");
    
    // Look for patterns that suggest malformed JSON
    // Count opening and closing braces
    let open_braces = content.matches('{').count();
    let close_braces = content.matches('}').count();
    eprintln!("Found {} opening braces and {} closing braces", open_braces, close_braces);
    
    if close_braces > open_braces {
        eprintln!("Found {} extra closing braces, attempting to fix...", close_braces - open_braces);
        
        // Try to fix by looking at the last few lines
        let lines: Vec<&str> = content.lines().collect();
        if lines.len() > 3 {
            let last_lines = &lines[lines.len()-3..];
            eprintln!("Last 3 lines of file:");
            for (i, line) in last_lines.iter().enumerate() {
                eprintln!("  Line {}: '{}'", lines.len() - 3 + i + 1, line);
            }
            
            // Check if we have pattern like "}\n}\n]"
            if last_lines.len() >= 3 && 
               last_lines[0].trim() == "}" && 
               last_lines[1].trim() == "}" && 
               last_lines[2].trim() == "]" {
                eprintln!("Found double closing brace pattern, removing extra brace");
                // Remove the extra closing brace
                let mut new_lines = lines[..lines.len()-3].to_vec();
                new_lines.push(last_lines[0]); // Keep first }
                new_lines.push("]"); // Keep the ]
                content = new_lines.join("\n");
            }
        }
    }
    
    // First try to parse as our expected format
    match serde_json::from_str::<Vec<BossEncounter>>(&content) {
        Ok(bosses) => {
            println!("Successfully parsed {} bosses", bosses.len());
            Ok(bosses)
        },
        Err(e) => {
            eprintln!("Failed to parse as BossEncounter array: {}", e);
            eprintln!("Error at line {}, column {}", e.line(), e.column());
            eprintln!("The issue is likely with field type mismatches. Attempting automatic conversion...");
            
            // Try to parse as generic JSON to understand the structure
            eprintln!("Attempting to parse as generic JSON...");
            match serde_json::from_str::<serde_json::Value>(&content) {
                Ok(json_value) => {
                    eprintln!("Successfully parsed as generic JSON");
                    // Check if it's an array
                    if let Some(array) = json_value.as_array() {
                        eprintln!("JSON is an array with {} elements", array.len());
                        
                        // Try to convert old format to new format
                        let mut converted_bosses = Vec::new();
                        
                        for (index, boss_json) in array.iter().enumerate() {
                            match try_convert_old_boss_format(boss_json) {
                                Ok(boss) => {
                                    eprintln!("Successfully converted boss at index {} in import", index);
                                    converted_bosses.push(boss);
                                },
                                Err(err) => {
                                    let boss_name = boss_json.get("name").and_then(|n| n.as_str()).unwrap_or("Unknown");
                                    eprintln!("Failed to convert boss '{}' at index {}: {}", boss_name, index, err);
                                    
                                    // Get more specific error info
                                    let mut field_info = Vec::new();
                                    if let Some(obj) = boss_json.as_object() {
                                        if let Some(mult) = obj.get("multiplier") {
                                            field_info.push(format!("multiplier={:?}", mult));
                                        }
                                        if let Some(items) = obj.get("items").and_then(|v| v.as_array()) {
                                            for (i, item) in items.iter().enumerate() {
                                                if let Some(chance) = item.get("Chance") {
                                                    field_info.push(format!("items[{}].Chance={:?}", i, chance));
                                                }
                                            }
                                        }
                                    }
                                    
                                    return Err(format!(
                                        "Failed to convert boss '{}' at index {}.\nField values: {}\nError: {}", 
                                        boss_name,
                                        index,
                                        field_info.join(", "),
                                        err
                                    ));
                                }
                            }
                        }
                        
                        if !converted_bosses.is_empty() {
                            println!("Successfully converted {} bosses from old format", converted_bosses.len());
                            return Ok(converted_bosses);
                        } else {
                            eprintln!("No bosses were successfully converted");
                        }
                    } else {
                        eprintln!("JSON is not an array! Type: {:?}", json_value);
                    }
                    
                    // If we can't convert, show detailed error
                    if let Some(first_elem) = json_value.as_array().and_then(|a| a.first()) {
                        if let Some(obj) = first_elem.as_object() {
                            let keys: Vec<&str> = obj.keys().map(|k| k.as_str()).collect();
                            return Err(format!(
                                "JSON structure mismatch at line {}, column {}. Expected BossEncounter format but found object with keys: {:?}. Original error: {}",
                                e.line(), e.column(), keys, e
                            ));
                        }
                    }
                    
                    Err(format!("Failed to parse JSON at line {}, column {}: {}", e.line(), e.column(), e))
                },
                Err(json_err) => {
                    eprintln!("Failed to parse as generic JSON: {}", json_err);
                    Err(format!("Invalid JSON format: {}. Parse error: {}", json_err, e))
                }
            }
        }
    }
}

// Helper function to try converting old boss format to new format
fn try_convert_old_boss_format(json: &serde_json::Value) -> Result<BossEncounter, String> {
    // Try direct deserialization first
    match serde_json::from_value::<BossEncounter>(json.clone()) {
        Ok(boss) => {
            eprintln!("Direct deserialization succeeded for boss: {}", boss.name);
            return Ok(boss);
        },
        Err(e) => {
            eprintln!("Direct deserialization failed: {}", e);
        }
    }
    
    // If that fails, try manual conversion for known differences
    let mut json_mut = json.clone();
    
    if let Some(obj) = json_mut.as_object_mut() {
        eprintln!("Converting boss: {}", obj.get("name").and_then(|n| n.as_str()).unwrap_or("Unknown"));
        // Fix multiplier: convert float to int
        if let Some(multiplier) = obj.get("multiplier") {
            if let Some(f) = multiplier.as_f64() {
                eprintln!("  Converting multiplier from {} to {}", f, f as u32);
                obj.insert("multiplier".to_string(), serde_json::json!(f as u32));
            }
        }
        
        // Fix Lifetime: ensure it's a float (can be int in old format)
        if let Some(lifetime) = obj.get("Lifetime") {
            if let Some(n) = lifetime.as_u64() {
                eprintln!("  Converting Lifetime from {} to {}.0", n, n);
                obj.insert("Lifetime".to_string(), serde_json::json!(n as f32));
            } else if let Some(n) = lifetime.as_i64() {
                eprintln!("  Converting Lifetime from {} to {}.0", n, n);
                obj.insert("Lifetime".to_string(), serde_json::json!(n as f32));
            }
        }
        
        // Fix LastAnnouncedPhase: ensure minimum value of 1
        if let Some(phase) = obj.get("LastAnnouncedPhase") {
            if let Some(n) = phase.as_i64() {
                if n == 0 {
                    obj.insert("LastAnnouncedPhase".to_string(), serde_json::json!(1));
                }
            } else if let Some(n) = phase.as_u64() {
                if n == 0 {
                    obj.insert("LastAnnouncedPhase".to_string(), serde_json::json!(1));
                }
            }
        } else {
            // If LastAnnouncedPhase is missing, add it with default value
            obj.insert("LastAnnouncedPhase".to_string(), serde_json::json!(1));
        }
        
        // Fix items array
        if let Some(items) = obj.get_mut("items").and_then(|v| v.as_array_mut()) {
            eprintln!("  Converting {} items...", items.len());
            for (idx, item) in items.iter_mut().enumerate() {
                if let Some(item_obj) = item.as_object_mut() {
                    // Fix Chance: convert float to int
                    if let Some(chance) = item_obj.get("Chance") {
                        if let Some(f) = chance.as_f64() {
                            eprintln!("    Item[{}] Chance: {} -> {}", idx, f, f as i32);
                            item_obj.insert("Chance".to_string(), serde_json::json!(f as i32));
                        }
                    }
                }
            }
        }
        
        // Fix unitStats
        if let Some(stats) = obj.get_mut("unitStats").and_then(|v| v.as_object_mut()) {
            eprintln!("  Converting unitStats...");
            
            // Fix FireResistance: convert float to int
            if let Some(fire_res) = stats.get("FireResistance") {
                if let Some(f) = fire_res.as_f64() {
                    eprintln!("    FireResistance: {} -> {}", f, f as i32);
                    stats.insert("FireResistance".to_string(), serde_json::json!(f as i32));
                }
            }
            
            // Fix CCReduction: convert float to int
            if let Some(cc_red) = stats.get("CCReduction") {
                if let Some(f) = cc_red.as_f64() {
                    eprintln!("    CCReduction: {} -> {}", f, f as i32);
                    stats.insert("CCReduction".to_string(), serde_json::json!(f as i32));
                }
            }
            
            
            // Also convert other float fields that should be float but might be sent as int
            let float_fields = ["PassiveHealthRegen", "HealthRecovery", "DamageReduction", "HealingReceived"];
            for field in &float_fields {
                if let Some(val) = stats.get(*field) {
                    if let Some(n) = val.as_i64() {
                        eprintln!("    {} (int to float): {} -> {}.0", field, n, n);
                        stats.insert(field.to_string(), serde_json::json!(n as f32));
                    }
                }
            }
        }
        
        // Fix CurrentDifficultyMultiplier: ensure it's float (in case it's int)
        if let Some(diff) = obj.get("CurrentDifficultyMultiplier") {
            if let Some(n) = diff.as_u64() {
                obj.insert("CurrentDifficultyMultiplier".to_string(), serde_json::json!(n as f32));
            }
        }
    }
    
    // Debug: Print the converted JSON
    eprintln!("Attempting to deserialize converted JSON...");
    
    // Now try to deserialize the fixed JSON
    match serde_json::from_value::<BossEncounter>(json_mut.clone()) {
        Ok(boss) => {
            eprintln!("Successfully converted boss: {}", boss.name);
            Ok(boss)
        },
        Err(e) => {
            eprintln!("Conversion failed after fixes: {}", e);
            
            // Try to identify the specific field causing issues
            if e.to_string().contains("invalid type") {
                eprintln!("Type mismatch error detected. Checking specific fields...");
                
                if let Some(obj) = json_mut.as_object() {
                    // Check common problematic fields
                    if let Some(mult) = obj.get("multiplier") {
                        eprintln!("  multiplier: {}", mult);
                    }
                    if let Some(lifetime) = obj.get("Lifetime") {
                        eprintln!("  Lifetime: {}", lifetime);
                    }
                    if let Some(stats) = obj.get("unitStats").and_then(|v| v.as_object()) {
                        if let Some(fire) = stats.get("FireResistance") {
                            eprintln!("  FireResistance: {}", fire);
                        }
                        if let Some(cc) = stats.get("CCReduction") {
                            eprintln!("  CCReduction: {}", cc);
                        }
                    }
                }
            }
            
            Err(format!("Conversion failed after fixes: {}", e))
        }
    }
}

#[tauri::command]
pub async fn export_bosses_file(
    path: String,
    bosses: Vec<BossEncounter>
) -> Result<(), String> {
    let json = serde_json::to_string_pretty(&bosses)
        .map_err(|e| format!("Failed to serialize bosses: {}", e))?;
    
    fs::write(&path, json)
        .map_err(|e| format!("Failed to write file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
pub async fn get_server_path() -> Result<String, String> {
    // Default path, can be overridden by user
    let home = std::env::var("HOME").unwrap_or_default();
    Ok(format!("{}/vrising_server/BepInEx/config", home))
}

#[tauri::command]
pub async fn load_config(state: State<'_, AppState>) -> Result<HashMap<String, serde_json::Value>, String> {
    let config_file = state.config_path.join("BloodyBoss.cfg");
    
    if !config_file.exists() {
        return Err("Configuration file not found".to_string());
    }
    
    let content = fs::read_to_string(&config_file)
        .map_err(|e| format!("Failed to read config file: {}", e))?;
    
    // Parse the BepInEx config file
    let config = parse_bepinex_config(&content);
    
    Ok(config)
}

#[tauri::command]
pub async fn save_config(
    config: HashMap<String, serde_json::Value>,
    state: State<'_, AppState>
) -> Result<(), String> {
    let config_file = state.config_path.join("BloodyBoss.cfg");
    
    // Create backup
    if config_file.exists() {
        let backup_name = format!("BloodyBoss.cfg.backup.{}", chrono::Utc::now().timestamp());
        let backup_file = state.config_path.join(backup_name);
        fs::copy(&config_file, &backup_file)
            .map_err(|e| format!("Failed to create backup: {}", e))?;
    }
    
    // Generate the config file content
    let content = generate_bepinex_config(&config);
    
    fs::write(&config_file, content)
        .map_err(|e| format!("Failed to write config file: {}", e))?;
    
    Ok(())
}

#[tauri::command]
pub async fn import_config_file(path: String) -> Result<HashMap<String, serde_json::Value>, String> {
    let content = fs::read_to_string(&path)
        .map_err(|e| format!("Failed to read file: {}", e))?;
    
    let config = parse_bepinex_config(&content);
    
    Ok(config)
}

#[tauri::command]
pub async fn export_config_file(
    path: String,
    config: HashMap<String, serde_json::Value>
) -> Result<(), String> {
    let content = generate_bepinex_config(&config);
    
    fs::write(&path, content)
        .map_err(|e| format!("Failed to write file: {}", e))?;
    
    Ok(())
}

// Helper function to parse BepInEx config format
fn parse_bepinex_config(content: &str) -> HashMap<String, serde_json::Value> {
    let mut config = HashMap::new();
    let mut current_section = String::new();
    
    for line in content.lines() {
        let trimmed = line.trim();
        
        // Skip empty lines and comments
        if trimmed.is_empty() || trimmed.starts_with('#') {
            continue;
        }
        
        // Check for section headers
        if trimmed.starts_with('[') && trimmed.ends_with(']') {
            current_section = trimmed[1..trimmed.len()-1].to_string();
            config.insert(current_section.clone(), serde_json::json!({}));
            continue;
        }
        
        // Parse key = value pairs
        if let Some(eq_pos) = trimmed.find('=') {
            let key = trimmed[..eq_pos].trim();
            let value = trimmed[eq_pos+1..].trim();
            
            if let Some(section) = config.get_mut(&current_section) {
                if let Some(obj) = section.as_object_mut() {
                    // Try to parse value as different types
                    let parsed_value = if value == "true" {
                        serde_json::json!(true)
                    } else if value == "false" {
                        serde_json::json!(false)
                    } else if let Ok(num) = value.parse::<i64>() {
                        serde_json::json!(num)
                    } else if let Ok(num) = value.parse::<f64>() {
                        serde_json::json!(num)
                    } else {
                        serde_json::json!(value)
                    };
                    
                    obj.insert(key.to_string(), parsed_value);
                }
            }
        }
    }
    
    config
}

// Helper function to generate BepInEx config format
fn generate_bepinex_config(config: &HashMap<String, serde_json::Value>) -> String {
    let mut lines = Vec::new();
    
    // Process sections in a specific order
    let sections_order = vec![
        "Ability Compatibility",
        "Castle Detection",
        "Dynamic Scaling",
        "Logging",
        "Main",
        "Phase Announcements",
        "Phase Messages",
        "Phase Names",
        "Progressive Difficulty",
        "Teleport"
    ];
    
    for section_name in sections_order {
        if let Some(section) = config.get(section_name) {
            if let Some(obj) = section.as_object() {
                lines.push(format!("[{}]", section_name));
                lines.push(String::new());
                
                for (key, value) in obj {
                    // Add comment based on the key
                    add_config_comment(&mut lines, section_name, key);
                    
                    // Add the actual value
                    let value_str = match value {
                        serde_json::Value::Bool(b) => b.to_string(),
                        serde_json::Value::Number(n) => n.to_string(),
                        serde_json::Value::String(s) => s.to_string(),
                        _ => value.to_string()
                    };
                    
                    lines.push(format!("{} = {}", key, value_str));
                    lines.push(String::new());
                }
            }
        }
    }
    
    lines.join("\n")
}

// Helper function to add comments for config keys
fn add_config_comment(lines: &mut Vec<String>, section: &str, key: &str) {
    match (section, key) {
        ("Ability Compatibility", "Enable") => {
            lines.push("## Enable ability compatibility checking when swapping VBlood abilities".to_string());
            lines.push("# Setting type: Boolean".to_string());
            lines.push("# Default value: true".to_string());
        },
        ("Ability Compatibility", "StrictMode") => {
            lines.push("## Block ability swaps if incompatibilities are detected (false = allow with warnings)".to_string());
            lines.push("# Setting type: Boolean".to_string());
            lines.push("# Default value: false".to_string());
        },
        // Add more comments as needed...
        _ => {}
    }
}
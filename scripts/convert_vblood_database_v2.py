#!/usr/bin/env python3
import re
from datetime import datetime

def extract_vblood_blocks(content):
    """Extract individual VBlood blocks from the C# file"""
    vblood_blocks = []
    
    # Find the start of the dictionary
    dict_start = content.find('private static readonly Dictionary<int, VBloodStaticInfo> _database = new()')
    if dict_start == -1:
        return []
    
    # Start from after the opening brace
    content = content[dict_start:]
    opening_brace = content.find('{')
    content = content[opening_brace + 1:]
    
    # Now we need to extract each VBlood entry
    # Pattern: [-number] = new VBloodStaticInfo // Name [FLAGS]
    pattern = r'\[(-?\d+)\]\s*=\s*new\s+VBloodStaticInfo\s*//\s*([^\n]+)'
    
    matches = list(re.finditer(pattern, content))
    
    for i, match in enumerate(matches):
        prefab_guid = int(match.group(1))
        header = match.group(2).strip()
        
        # Parse header
        name_match = re.match(r'([^\[]+)(?:\s*\[([^\]]+)\])?', header)
        if not name_match:
            continue
            
        name = name_match.group(1).strip()
        flags = name_match.group(2) or ''
        
        # Find the content of this VBlood
        start_pos = match.end()
        
        # Find the matching closing brace for this VBlood
        brace_count = 0
        current_pos = start_pos
        vblood_content = ''
        
        while current_pos < len(content):
            char = content[current_pos]
            vblood_content += char
            
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    break
            
            current_pos += 1
        
        vblood_blocks.append({
            'prefab_guid': prefab_guid,
            'name': name,
            'flags': flags,
            'content': vblood_content
        })
    
    return vblood_blocks

def parse_vblood_content(vblood_data):
    """Parse the content of a single VBlood"""
    content = vblood_data['content']
    
    # Extract level
    level_match = re.search(r'Level\s*=\s*(\d+)', content)
    level = int(level_match.group(1)) if level_match else 0
    
    # Extract CanFly
    can_fly_match = re.search(r'CanFly\s*=\s*(true|false)', content)
    can_fly = can_fly_match.group(1) == 'true' if can_fly_match else False
    
    # Extract features
    features = []
    features_match = re.search(r'Features\s*=\s*new\s+HashSet<string>\s*\{([^}]+)\}', content)
    if features_match:
        features_str = features_match.group(1)
        features = [f.strip().strip('"') for f in features_str.split(',') if f.strip()]
    
    # Extract abilities
    abilities = []
    abilities_match = re.search(r'Abilities\s*=\s*new\s+Dictionary<int,\s*AbilityStaticInfo>\s*\{', content)
    
    if abilities_match:
        abilities_start = abilities_match.end()
        abilities_content = content[abilities_start:]
        
        # Find each ability entry
        ability_pattern = r'\[(\d+)\]\s*=\s*new\s+AbilityStaticInfo'
        ability_matches = list(re.finditer(ability_pattern, abilities_content))
        
        for j, ability_match in enumerate(ability_matches):
            slot = int(ability_match.group(1))
            
            # Find the content of this ability
            start_pos = ability_match.end()
            
            # Find the matching closing brace
            brace_count = 0
            current_pos = start_pos
            ability_content = ''
            
            while current_pos < len(abilities_content):
                char = abilities_content[current_pos]
                ability_content += char
                
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        break
                
                current_pos += 1
            
            # Parse ability properties
            guid_match = re.search(r'GUID\s*=\s*(-?\d+)', ability_content)
            guid = int(guid_match.group(1)) if guid_match else 0
            
            category_match = re.search(r'Category\s*=\s*AbilityCategory\.(\w+)', ability_content)
            category = category_match.group(1) if category_match else 'Unknown'
            
            cast_time_match = re.search(r'CastTime\s*=\s*([\d.]+)f', ability_content)
            cast_time = float(cast_time_match.group(1)) if cast_time_match else 0.0
            
            cooldown_match = re.search(r'Cooldown\s*=\s*([\d.]+)f', ability_content)
            cooldown = float(cooldown_match.group(1)) if cooldown_match else 0.0
            
            # Extract behavior type from ExtraData
            behavior_type = 'None'
            behavior_match = re.search(r'\{\s*"BehaviorType",\s*"([^"]+)"\s*\}', ability_content)
            if behavior_match:
                behavior_type = behavior_match.group(1)
            
            abilities.append({
                'slot': slot,
                'guid': guid,
                'category': category,
                'castTime': cast_time,
                'cooldown': cooldown,
                'behaviorType': behavior_type
            })
    
    return {
        'prefabGuid': vblood_data['prefab_guid'],
        'name': vblood_data['name'],
        'level': level,
        'comment': vblood_data['name'],  # Use name as comment
        'canFly': can_fly,
        'features': features,
        'abilityCount': len(abilities),
        'abilities': abilities,
        'hasAbilities': 'WITH_ABILITIES' in vblood_data['flags']
    }

def generate_typescript(total_entries, vbloods):
    ts_content = f"""// Auto-generated VBlood Database for BloodyBoss Configuration Tool
// Generated from VBloodDatabase.cs
// Total VBloods with abilities: {len(vbloods)}
// Total entries in source: {total_entries}
// Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

export interface VBloodAbility {{
  slot: number;
  guid: number;
  category: string;
  castTime?: number;
  cooldown?: number;
  behaviorType?: string;
}}

export interface VBloodInfo {{
  prefabGuid: number;
  name: string;
  level: number;
  comment: string;
  canFly: boolean;
  features: string[];
  abilityCount: number;
  abilities: VBloodAbility[];
}}

export const VBLOOD_DATABASE: VBloodInfo[] = [
"""
    
    for i, vblood in enumerate(vbloods):
        ts_content += "  {\n"
        ts_content += f"    prefabGuid: {vblood['prefabGuid']},\n"
        ts_content += f'    name: "{vblood["name"]}",\n'
        ts_content += f"    level: {vblood['level']},\n"
        ts_content += f'    comment: "{vblood["comment"]}",\n'
        ts_content += f"    canFly: {str(vblood['canFly']).lower()},\n"
        
        # Features array
        ts_content += "    features: ["
        if vblood['features']:
            ts_content += ', '.join(f'"{f}"' for f in vblood['features'])
        ts_content += "],\n"
        
        ts_content += f"    abilityCount: {vblood['abilityCount']},\n"
        ts_content += "    abilities: [\n"
        
        for j, ability in enumerate(vblood['abilities']):
            ts_content += "      {\n"
            ts_content += f"        slot: {ability['slot']},\n"
            ts_content += f"        guid: {ability['guid']},\n"
            ts_content += f'        category: "{ability["category"]}",\n'
            if ability['castTime'] > 0:
                ts_content += f"        castTime: {ability['castTime']},\n"
            if ability['cooldown'] > 0:
                ts_content += f"        cooldown: {ability['cooldown']},\n"
            if ability['behaviorType'] != 'None':
                ts_content += f'        behaviorType: "{ability["behaviorType"]}"\n'
            else:
                # Remove trailing comma from last property
                ts_content = ts_content.rstrip(',\n') + '\n'
            ts_content += "      }"
            if j < len(vblood['abilities']) - 1:
                ts_content += ","
            ts_content += "\n"
        
        ts_content += "    ]\n"
        ts_content += "  }"
        if i < len(vbloods) - 1:
            ts_content += ","
        ts_content += "\n"
    
    ts_content += "];\n"
    
    return ts_content

if __name__ == '__main__':
    cs_path = '/run/media/trodi/16902D94902D7AFF/MODS/BloodyBoss/Data/VBloodDatabase.cs'
    ts_path = '/run/media/trodi/16902D94902D7AFF/MODS/BloodyBossConfig/src/data/vbloodDatabase.ts'
    
    print(f"Converting VBlood database from C# to TypeScript...")
    print(f"Source: {cs_path}")
    print(f"Target: {ts_path}")
    
    try:
        with open(cs_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract total entries
        total_match = re.search(r'// Total entries: (\d+)', content)
        total_entries = total_match.group(1) if total_match else 'Unknown'
        
        # Extract all VBlood blocks
        vblood_blocks = extract_vblood_blocks(content)
        print(f"Found {len(vblood_blocks)} VBlood entries")
        
        # Parse each VBlood
        vbloods = []
        for block in vblood_blocks:
            parsed = parse_vblood_content(block)
            # Only include VBloods with abilities
            if parsed['hasAbilities'] and parsed['abilities']:
                vbloods.append(parsed)
        
        print(f"Found {len(vbloods)} VBloods with abilities")
        
        # Generate TypeScript
        ts_content = generate_typescript(total_entries, vbloods)
        
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"Successfully generated TypeScript file!")
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
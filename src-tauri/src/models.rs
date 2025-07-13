use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnitStats {
    #[serde(rename = "PhysicalPower")]
    pub physical_power: f32,
    #[serde(rename = "SpellPower")]
    pub spell_power: f32,
    #[serde(rename = "ResourcePower")]
    pub resource_power: f32,
    #[serde(rename = "SiegePower")]
    pub siege_power: f32,
    #[serde(rename = "PhysicalResistance")]
    pub physical_resistance: f32,
    #[serde(rename = "SpellResistance")]
    pub spell_resistance: f32,
    #[serde(rename = "FireResistance")]
    pub fire_resistance: i32,
    #[serde(rename = "PassiveHealthRegen")]
    pub passive_health_regen: f32,
    #[serde(rename = "CCReduction")]
    pub cc_reduction: i32,
    #[serde(rename = "HealthRecovery")]
    pub health_recovery: f32,
    #[serde(rename = "DamageReduction")]
    pub damage_reduction: f32,
    #[serde(rename = "HealingReceived")]
    pub healing_received: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AbilitySwap {
    #[serde(rename = "SourcePrefabGUID")]
    pub source_prefab_guid: i32,
    #[serde(rename = "SourceVBloodName")]
    pub source_vblood_name: String,
    #[serde(rename = "SlotIndex")]
    pub slot_index: u32,
    #[serde(rename = "Description")]
    pub description: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MechanicTrigger {
    #[serde(rename = "Type")]
    pub trigger_type: String,
    #[serde(rename = "Value")]
    pub value: f32,
    #[serde(rename = "Comparison")]
    pub comparison: String,
    #[serde(rename = "OneTime")]
    pub one_time: bool,
    #[serde(rename = "RepeatInterval")]
    pub repeat_interval: f32,
    #[serde(rename = "CompoundConditions")]
    pub compound_conditions: Option<serde_json::Value>,
    #[serde(rename = "CompoundOperator")]
    pub compound_operator: String,
    #[serde(rename = "TimeWindow")]
    pub time_window: f32,
    #[serde(rename = "AddName")]
    pub add_name: Option<String>,
    #[serde(rename = "AddCount")]
    pub add_count: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BossMechanic {
    #[serde(rename = "Id")]
    pub id: String,
    #[serde(rename = "Type")]
    pub mechanic_type: String,
    #[serde(rename = "Enabled")]
    pub enabled: bool,
    #[serde(rename = "Trigger")]
    pub trigger: MechanicTrigger,
    #[serde(rename = "Parameters")]
    pub parameters: HashMap<String, serde_json::Value>,
    #[serde(rename = "HasTriggered")]
    pub has_triggered: bool,
    #[serde(rename = "LastTriggered")]
    pub last_triggered: Option<String>,
    #[serde(rename = "TriggerCount")]
    pub trigger_count: u32,
    #[serde(rename = "IsExpired")]
    pub is_expired: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BossPhase {
    pub name: String,
    #[serde(rename = "hpThreshold")]
    pub hp_threshold: f32,
    pub mechanics: Vec<String>,
    pub modifiers: Option<HashMap<String, serde_json::Value>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RewardItem {
    pub name: String,
    #[serde(rename = "ItemID")]
    pub item_id: i32,
    #[serde(rename = "Stack")]
    pub stack: u32,
    #[serde(rename = "Chance")]
    pub chance: i32,
    #[serde(rename = "Color")]
    pub color: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BossEncounter {
    pub name: String,
    #[serde(rename = "nameHash")]
    pub name_hash: String,
    #[serde(rename = "AssetName")]
    pub asset_name: String,
    #[serde(rename = "Hour")]
    pub hour: String,
    #[serde(rename = "HourDespawn")]
    pub hour_despawn: String,
    #[serde(rename = "PrefabGUID")]
    pub prefab_guid: i32,
    pub level: u32,
    pub multiplier: u32,
    pub items: Vec<RewardItem>,
    #[serde(rename = "bossSpawn")]
    pub boss_spawn: bool,
    #[serde(rename = "Lifetime")]
    pub lifetime: f32,
    pub x: f32,
    pub y: f32,
    pub z: f32,
    #[serde(rename = "unitStats")]
    pub unit_stats: UnitStats,
    #[serde(rename = "ConsecutiveSpawns", default)]
    pub consecutive_spawns: u32,
    #[serde(rename = "LastSuccessfulKill", skip_serializing_if = "Option::is_none")]
    pub last_successful_kill: Option<String>,
    #[serde(rename = "CurrentDifficultyMultiplier", default = "default_difficulty_multiplier")]
    pub current_difficulty_multiplier: f32,
    #[serde(rename = "IsPaused", default)]
    pub is_paused: bool,
    #[serde(rename = "PausedAt", skip_serializing_if = "Option::is_none")]
    pub paused_at: Option<String>,
    #[serde(rename = "LastSpawn", skip_serializing_if = "Option::is_none")]
    pub last_spawn: Option<String>,
    #[serde(rename = "LastAnnouncedPhase", default = "default_announced_phase")]
    pub last_announced_phase: u32,
    #[serde(rename = "Mechanics", default)]
    pub mechanics: Vec<BossMechanic>,
    #[serde(rename = "AbilitySwaps", default)]
    pub ability_swaps: HashMap<String, AbilitySwap>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ValidationResult {
    pub valid: bool,
    pub errors: Option<Vec<String>>,
    pub warnings: Option<Vec<String>>,
}

// Default functions for serde
fn default_difficulty_multiplier() -> f32 {
    1.0
}

fn default_announced_phase() -> u32 {
    1
}
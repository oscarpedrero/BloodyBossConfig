export interface StunMechanicParams {
  target: 'random' | 'closest' | 'farthest' | 'all' | 'tank' | 'highest_damage'
  duration: number
  markDuration: number
  announcement?: string
  visualEffect?: string
}

export interface AoeMechanicParams {
  type: 'fire' | 'frost' | 'blood' | 'holy' | 'shadow' | 'poison' | 'electric'
  pattern: 'boss' | 'ring' | 'random' | 'cross' | 'line' | 'players' | 'spiral'
  damage: number
  radius: number
  duration?: number
  tickRate?: number
  telegraphDuration?: number
  count?: number
}

export interface SlowMechanicParams {
  radius: number
  duration: number
  slowAmount: number
  energyDrain?: number
  minPlayers?: number
  punishment?: {
    type: 'damage' | 'stun' | 'fear'
    value: number
  }
}

export interface AbsorbMechanicParams {
  type: 'health' | 'shield' | 'all'
  amount: number
  radius: number
  duration: number
  continuous?: boolean
  healBoss?: boolean
  minPlayers?: number
}

export interface WeakenMechanicParams {
  type: 'physical' | 'magical' | 'all'
  amount: number
  duration: number
  radius: number
  stackable?: boolean
  maxStacks?: number
}

export interface FearMechanicParams {
  radius: number
  duration: number
  breakOnDamage?: boolean
  immunityDuration?: number
}

export interface SummonMechanicParams {
  prefabGuid: string
  count: number
  pattern: 'circle' | 'line' | 'random' | 'protect'
  lifeTime?: number
  inheritBossLevel?: boolean
  levelModifier?: number
}

export interface TrapMechanicParams {
  type: 'spike' | 'fire' | 'ice' | 'poison' | 'electric'
  damage: number
  duration: number
  pattern: 'random' | 'grid' | 'line' | 'circle'
  count: number
  activationDelay?: number
  visualWarning?: boolean
}

export type MechanicParams = 
  | StunMechanicParams
  | AoeMechanicParams
  | SlowMechanicParams
  | AbsorbMechanicParams
  | WeakenMechanicParams
  | FearMechanicParams
  | SummonMechanicParams
  | TrapMechanicParams

export interface MechanicTemplate {
  id: string
  name: string
  type: string
  description: string
  defaultParams: MechanicParams
  category: 'control' | 'damage' | 'support' | 'special'
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme'
}

// Complete BloodyBoss mechanic system based on real JSON structure
export type MechanicType = 
  // Control mechanics
  | 'stun' | 'fear' | 'slow' | 'root' | 'silence' | 'mindcontrol'
  // Damage mechanics  
  | 'aoe' | 'dot' | 'knockback' | 'weaken'
  // Absorption/Transfer mechanics
  | 'absorb' | 'buffsteal' | 'reflect'
  // Battlefield mechanics
  | 'trap' | 'summon' | 'vision' | 'dispel'
  // Boss enhancement mechanics
  | 'heal' | 'shield' | 'enrage' | 'phase' | 'pull'
  // Special mechanics
  | 'clone' | 'curse'

export type TriggerType = 'hp_threshold' | 'time' | 'players'
export type ComparisonType = 'less_than' | 'greater_than' | 'equals'
export type CompoundOperator = 'AND' | 'OR'

export interface MechanicTrigger {
  Type: TriggerType
  Value: number                    // 90% HP, 60 seconds, 3 players
  Comparison: ComparisonType       
  OneTime: boolean                 // Execute once or repeat
  RepeatInterval: number           // Seconds between repeats
  CompoundConditions: any | null   // Complex conditions
  CompoundOperator: CompoundOperator
  TimeWindow: number
  AddName: string | null
  AddCount: number
}

export interface MechanicConfig {
  Id: string                       // UUID
  Type: MechanicType
  Enabled: boolean
  Trigger: MechanicTrigger
  Parameters: Record<string, any>  // Dynamic parameters per mechanic type
  HasTriggered: boolean           // Execution state
  LastTriggered: string | null    // Timestamp
  TriggerCount: number            // Execution counter
  IsExpired: boolean              // Validity state
}

// Enhanced UI organization types
export type MechanicCategory = 'control' | 'damage' | 'support' | 'defensive' | 'utility'
export type ComplexityLevel = 'basic' | 'intermediate' | 'advanced'

// Parameter definition for dynamic UI generation
export interface ParameterDefinition {
  key: string
  label: string
  type: 'number' | 'boolean' | 'string' | 'select' | 'slider' | 'color'
  defaultValue: any
  validation?: {
    min?: number
    max?: number
    options?: string[]
    required?: boolean
  }
  description: string
  tooltip: string
}

// Enhanced parameters for documented mechanics
export interface EnhancedStunParameters {
  hp?: string
  target?: 'all' | 'nearest' | 'farthest' | 'random'
  duration?: string
  mark_duration?: string
  announcement?: string
}

export interface EnhancedAoeParameters {
  hp?: string
  aoe_type?: 'fire' | 'frost' | 'blood' | 'holy' | 'shadow' | 'poison' | 'electric'
  radius?: string
  damage?: string
  pattern?: 'boss' | 'ring' | 'random' | 'cross' | 'line' | 'players' | 'spiral'
  count?: string
  delay?: string
  telegraph_duration?: string
  persist_duration?: string
  announcement?: string
}

export interface EnhancedAbsorbParameters {
  hp?: string
  absorb_type?: 'health' | 'shield' | 'all'
  amount?: string
  continuous?: boolean
  min_players?: string
  global_radius?: string
  global_multiplier?: string
  announcement?: string
}

export interface EnrageParameters {
  damage_multiplier?: number
  movement_speed_multiplier?: number
  attack_speed_multiplier?: number
  cast_speed_multiplier?: number
  cooldown_reduction?: number
  duration?: number
  visual_effect?: string
  announcement?: string
}

export interface ShieldParameters {
  shield_type?: 'immune' | 'absorb' | 'reflect'
  shield_amount?: number
  duration?: number
  can_move?: boolean
  visual_effect?: string
  announcement?: string
}

export interface SummonParameters {
  add_prefab?: number
  count?: number
  pattern?: 'circle' | 'line' | 'random'
  despawn_on_boss_death?: boolean
  announcement?: string
}
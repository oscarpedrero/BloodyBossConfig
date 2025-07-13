import { MechanicConfig } from './mechanics'

export interface UnitStats {
  PhysicalPower: number
  SpellPower: number
  ResourcePower: number
  SiegePower: number
  PhysicalResistance: number
  SpellResistance: number
  FireResistance: number
  PassiveHealthRegen: number
  CCReduction: number
  HealthRecovery: number
  DamageReduction: number
  HealingReceived: number
}

export interface AbilitySwap {
  AbilityGUID?: number
  SourcePrefabGUID: number
  SourceVBloodName: string
  SlotIndex: number
  Description: string
}

export interface RewardItem {
  name: string
  ItemID: number
  Stack: number
  Chance: number
  Color: string
}

export interface BossEncounter {
  name: string
  nameHash: string
  AssetName: string
  Hour: string
  HourDespawn: string
  PrefabGUID: number
  level: number
  multiplier: number
  items: RewardItem[]
  bossSpawn: boolean
  Lifetime: number
  x: number
  y: number
  z: number
  unitStats: UnitStats
  ConsecutiveSpawns: number
  LastSuccessfulKill?: string | null
  CurrentDifficultyMultiplier: number
  IsPaused: boolean
  PausedAt?: string | null
  LastSpawn?: string | null
  LastAnnouncedPhase: number
  Mechanics: MechanicConfig[]
  AbilitySwaps: Record<string, AbilitySwap>
}

export interface BossConfig {
  enabled: boolean
  bosses: BossEncounter[]
  lastModified?: string
  version?: string
}
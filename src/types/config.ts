export interface GeneralConfig {
  enabled: boolean
  commandPrefix: string
  announceSpawn: boolean
  announceDespawn: boolean
  spawnDelay: number
  respawnCooldown: number
  maxActiveWorldBosses: number
}

export interface CombatConfig {
  globalDamageMultiplier: number
  globalHealthMultiplier: number
  globalLevelModifier: number
  enableMechanics: boolean
  mechanicCooldown: number
  phaseTransitionDelay: number
}

export interface RewardsConfig {
  enabled: boolean
  minPlayers: number
  damageThreshold: number
  rewardRadius: number
  dropOnGround: boolean
  sendToInventory: boolean
}

export interface DatabaseConfig {
  autoBackup: boolean
  backupInterval: number
  maxBackups: number
  compressBackups: boolean
}

export interface ModConfiguration {
  general: GeneralConfig
  combat: CombatConfig
  rewards: RewardsConfig
  database: DatabaseConfig
}

export interface ValidationResult {
  valid: boolean
  errors?: string[]
  warnings?: string[]
}
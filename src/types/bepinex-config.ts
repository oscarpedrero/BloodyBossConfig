export interface BloodyBossConfig {
  // Ability Compatibility
  abilityCompatibility: {
    enable: boolean
    strictMode: boolean
    logWarnings: boolean
    allowCrossType: boolean
  }

  // Castle Detection
  castleDetection: {
    enable: boolean
  }

  // Dynamic Scaling
  dynamicScaling: {
    enable: boolean
    baseHealthMultiplier: number
    healthPerPlayer: number
    damagePerPlayer: number
    maxPlayersForScaling: number
  }

  // Logging
  logging: {
    globalLogLevel: string
    categoryLogLevels: string
    disabledCategories: string
    logToFile: boolean
    logFilePath: string
  }

  // Main
  main: {
    enabled: boolean
    killMessageBossTemplate: string
    spawnMessageBossTemplate: string
    despawnMessageBossTemplate: string
    buffForWorldBoss: number
    playersOnlineMultiplier: boolean
    clearDropTable: boolean
    minionDamage: boolean
    randomBoss: boolean
    buffAfterKillingEnabled: boolean
    buffAfterKillingPrefabGUID: number
    teamBossEnable: boolean
    allowBossAchievements: boolean
  }

  // Phase Announcements
  phaseAnnouncements: {
    enable: boolean
    announceEveryPhase: boolean
    announceMilestoneSpawns: boolean
  }

  // Phase Messages
  phaseMessages: {
    normalTemplate: string
    hardTemplate: string
    epicTemplate: string
    legendaryTemplate: string
    veteranSuffix: string
    enragedSuffix: string
    epicPrefix: string
    legendaryPrefix: string
    consecutiveInfo: string
  }

  // Phase Names
  phaseNames: {
    normal: string
    hard: string
    epic: string
    legendary: string
  }

  // Progressive Difficulty
  progressiveDifficulty: {
    enable: boolean
    startPhase: number
    maxPhase: number
    healthMultiplierBase: number
    healthMultiplierPerPhase: number
    damageMultiplierBase: number
    damageMultiplierPerPhase: number
    resetOnFailure: boolean
    persistAcrossRestarts: boolean
    disableDynamicScaling: boolean
  }

  // Teleport
  teleport: {
    enable: boolean
  }
}

export const defaultConfig: BloodyBossConfig = {
  abilityCompatibility: {
    enable: true,
    strictMode: false,
    logWarnings: true,
    allowCrossType: false
  },
  castleDetection: {
    enable: false
  },
  dynamicScaling: {
    enable: false,
    baseHealthMultiplier: 1,
    healthPerPlayer: 0.25,
    damagePerPlayer: 0.15,
    maxPlayersForScaling: 10
  },
  logging: {
    globalLogLevel: 'Warning',
    categoryLogLevels: 'Boss:Warning,Damage:Warning,Hook:Warning,Timer:Warning,Mechanic:Warning,Spawn:Info,Death:Info,Reward:Info,System:Warning',
    disabledCategories: 'Debug,Timer,Hook',
    logToFile: false,
    logFilePath: 'BepInEx/logs/BloodyBoss.log'
  },
  main: {
    enabled: true,
    killMessageBossTemplate: 'The #vblood# boss has been defeated by the following brave warriors:',
    spawnMessageBossTemplate: 'A Boss #worldbossname# has been summon you got #time# minutes to defeat it!.',
    despawnMessageBossTemplate: 'You failed to kill the Boss #worldbossname# in time.',
    buffForWorldBoss: 1163490655,
    playersOnlineMultiplier: false,
    clearDropTable: false,
    minionDamage: true,
    randomBoss: false,
    buffAfterKillingEnabled: true,
    buffAfterKillingPrefabGUID: -2061047741,
    teamBossEnable: false,
    allowBossAchievements: false
  },
  phaseAnnouncements: {
    enable: true,
    announceEveryPhase: false,
    announceMilestoneSpawns: true
  },
  phaseMessages: {
    normalTemplate: '⚔️ #bossname# [#phasename#] - Phase #phase# | #players# players | Damage x#damage#',
    hardTemplate: '⚔️ #bossname# [#phasename#] - Phase #phase# | #players# players | Damage x#damage#',
    epicTemplate: '⚔️ #bossname# [#phasename#] - Phase #phase# | #players# players | Damage x#damage##consecutive_info#',
    legendaryTemplate: '⚔️ #bossname# [#phasename#] - Phase #phase# | #players# players | Damage x#damage##consecutive_info#',
    veteranSuffix: 'Veteran',
    enragedSuffix: 'Enraged',
    epicPrefix: '⚡ EPIC ENCOUNTER! ',
    legendaryPrefix: '💀 LEGENDARY BATTLE! ',
    consecutiveInfo: ' | Consecutive spawns: #consecutive#'
  },
  phaseNames: {
    normal: 'Normal',
    hard: 'Hard',
    epic: 'Epic',
    legendary: 'Legendary'
  },
  progressiveDifficulty: {
    enable: true,
    startPhase: 1,
    maxPhase: 10,
    healthMultiplierBase: 1,
    healthMultiplierPerPhase: 0.2,
    damageMultiplierBase: 1,
    damageMultiplierPerPhase: 0.15,
    resetOnFailure: true,
    persistAcrossRestarts: true,
    disableDynamicScaling: false
  },
  teleport: {
    enable: true
  }
}
import { invoke } from '@tauri-apps/api/core'
import { BloodyBossConfig, defaultConfig } from '../types/bepinex-config'

class ConfigService {
  async loadConfig(): Promise<BloodyBossConfig> {
    try {
      const rawConfig: any = await invoke('load_config')
      return this.transformConfig(rawConfig)
    } catch (error) {
      console.error('Failed to load config:', error)
      return defaultConfig
    }
  }

  private transformConfig(rawConfig: any): BloodyBossConfig {
    const config = { ...defaultConfig }

    // Map the raw config from Rust to our TypeScript structure
    if (rawConfig['Ability Compatibility']) {
      config.abilityCompatibility = {
        enable: rawConfig['Ability Compatibility'].Enable ?? defaultConfig.abilityCompatibility.enable,
        strictMode: rawConfig['Ability Compatibility'].StrictMode ?? defaultConfig.abilityCompatibility.strictMode,
        logWarnings: rawConfig['Ability Compatibility'].LogWarnings ?? defaultConfig.abilityCompatibility.logWarnings,
        allowCrossType: rawConfig['Ability Compatibility'].AllowCrossType ?? defaultConfig.abilityCompatibility.allowCrossType
      }
    }

    if (rawConfig['Castle Detection']) {
      config.castleDetection = {
        enable: rawConfig['Castle Detection'].Enable ?? defaultConfig.castleDetection.enable
      }
    }

    if (rawConfig['Dynamic Scaling']) {
      config.dynamicScaling = {
        enable: rawConfig['Dynamic Scaling'].Enable ?? defaultConfig.dynamicScaling.enable,
        baseHealthMultiplier: rawConfig['Dynamic Scaling'].BaseHealthMultiplier ?? defaultConfig.dynamicScaling.baseHealthMultiplier,
        healthPerPlayer: rawConfig['Dynamic Scaling'].HealthPerPlayer ?? defaultConfig.dynamicScaling.healthPerPlayer,
        damagePerPlayer: rawConfig['Dynamic Scaling'].DamagePerPlayer ?? defaultConfig.dynamicScaling.damagePerPlayer,
        maxPlayersForScaling: rawConfig['Dynamic Scaling'].MaxPlayersForScaling ?? defaultConfig.dynamicScaling.maxPlayersForScaling
      }
    }

    if (rawConfig['Logging']) {
      config.logging = {
        globalLogLevel: rawConfig['Logging'].GlobalLogLevel ?? defaultConfig.logging.globalLogLevel,
        categoryLogLevels: rawConfig['Logging'].CategoryLogLevels ?? defaultConfig.logging.categoryLogLevels,
        disabledCategories: rawConfig['Logging'].DisabledCategories ?? defaultConfig.logging.disabledCategories,
        logToFile: rawConfig['Logging'].LogToFile ?? defaultConfig.logging.logToFile,
        logFilePath: rawConfig['Logging'].LogFilePath ?? defaultConfig.logging.logFilePath
      }
    }

    if (rawConfig['Main']) {
      config.main = {
        enabled: rawConfig['Main'].Enabled ?? defaultConfig.main.enabled,
        killMessageBossTemplate: rawConfig['Main'].KillMessageBossTemplate ?? defaultConfig.main.killMessageBossTemplate,
        spawnMessageBossTemplate: rawConfig['Main'].SpawnMessageBossTemplate ?? defaultConfig.main.spawnMessageBossTemplate,
        despawnMessageBossTemplate: rawConfig['Main'].DespawnMessageBossTemplate ?? defaultConfig.main.despawnMessageBossTemplate,
        buffForWorldBoss: rawConfig['Main'].BuffForWorldBoss ?? defaultConfig.main.buffForWorldBoss,
        playersOnlineMultiplier: rawConfig['Main'].PlayersOnlineMultiplier ?? defaultConfig.main.playersOnlineMultiplier,
        clearDropTable: rawConfig['Main'].ClearDropTable ?? defaultConfig.main.clearDropTable,
        minionDamage: rawConfig['Main'].MinionDamage ?? defaultConfig.main.minionDamage,
        randomBoss: rawConfig['Main'].RandomBoss ?? defaultConfig.main.randomBoss,
        buffAfterKillingEnabled: rawConfig['Main'].BuffAfterKillingEnabled ?? defaultConfig.main.buffAfterKillingEnabled,
        buffAfterKillingPrefabGUID: rawConfig['Main'].BuffAfterKillingPrefabGUID ?? defaultConfig.main.buffAfterKillingPrefabGUID,
        teamBossEnable: rawConfig['Main'].TeamBossEnable ?? defaultConfig.main.teamBossEnable,
        allowBossAchievements: rawConfig['Main'].AllowBossAchievements ?? defaultConfig.main.allowBossAchievements
      }
    }

    if (rawConfig['Phase Announcements']) {
      config.phaseAnnouncements = {
        enable: rawConfig['Phase Announcements'].Enable ?? defaultConfig.phaseAnnouncements.enable,
        announceEveryPhase: rawConfig['Phase Announcements'].AnnounceEveryPhase ?? defaultConfig.phaseAnnouncements.announceEveryPhase,
        announceMilestoneSpawns: rawConfig['Phase Announcements'].AnnounceMilestoneSpawns ?? defaultConfig.phaseAnnouncements.announceMilestoneSpawns
      }
    }

    if (rawConfig['Phase Messages']) {
      config.phaseMessages = {
        normalTemplate: rawConfig['Phase Messages'].NormalTemplate ?? defaultConfig.phaseMessages.normalTemplate,
        hardTemplate: rawConfig['Phase Messages'].HardTemplate ?? defaultConfig.phaseMessages.hardTemplate,
        epicTemplate: rawConfig['Phase Messages'].EpicTemplate ?? defaultConfig.phaseMessages.epicTemplate,
        legendaryTemplate: rawConfig['Phase Messages'].LegendaryTemplate ?? defaultConfig.phaseMessages.legendaryTemplate,
        veteranSuffix: rawConfig['Phase Messages'].VeteranSuffix ?? defaultConfig.phaseMessages.veteranSuffix,
        enragedSuffix: rawConfig['Phase Messages'].EnragedSuffix ?? defaultConfig.phaseMessages.enragedSuffix,
        epicPrefix: rawConfig['Phase Messages'].EpicPrefix ?? defaultConfig.phaseMessages.epicPrefix,
        legendaryPrefix: rawConfig['Phase Messages'].LegendaryPrefix ?? defaultConfig.phaseMessages.legendaryPrefix,
        consecutiveInfo: rawConfig['Phase Messages'].ConsecutiveInfo ?? defaultConfig.phaseMessages.consecutiveInfo
      }
    }

    if (rawConfig['Phase Names']) {
      config.phaseNames = {
        normal: rawConfig['Phase Names'].Normal ?? defaultConfig.phaseNames.normal,
        hard: rawConfig['Phase Names'].Hard ?? defaultConfig.phaseNames.hard,
        epic: rawConfig['Phase Names'].Epic ?? defaultConfig.phaseNames.epic,
        legendary: rawConfig['Phase Names'].Legendary ?? defaultConfig.phaseNames.legendary
      }
    }

    if (rawConfig['Progressive Difficulty']) {
      config.progressiveDifficulty = {
        enable: rawConfig['Progressive Difficulty'].Enable ?? defaultConfig.progressiveDifficulty.enable,
        startPhase: rawConfig['Progressive Difficulty'].StartPhase ?? defaultConfig.progressiveDifficulty.startPhase,
        maxPhase: rawConfig['Progressive Difficulty'].MaxPhase ?? defaultConfig.progressiveDifficulty.maxPhase,
        healthMultiplierBase: rawConfig['Progressive Difficulty'].HealthMultiplierBase ?? defaultConfig.progressiveDifficulty.healthMultiplierBase,
        healthMultiplierPerPhase: rawConfig['Progressive Difficulty'].HealthMultiplierPerPhase ?? defaultConfig.progressiveDifficulty.healthMultiplierPerPhase,
        damageMultiplierBase: rawConfig['Progressive Difficulty'].DamageMultiplierBase ?? defaultConfig.progressiveDifficulty.damageMultiplierBase,
        damageMultiplierPerPhase: rawConfig['Progressive Difficulty'].DamageMultiplierPerPhase ?? defaultConfig.progressiveDifficulty.damageMultiplierPerPhase,
        resetOnFailure: rawConfig['Progressive Difficulty'].ResetOnFailure ?? defaultConfig.progressiveDifficulty.resetOnFailure,
        persistAcrossRestarts: rawConfig['Progressive Difficulty'].PersistAcrossRestarts ?? defaultConfig.progressiveDifficulty.persistAcrossRestarts,
        disableDynamicScaling: rawConfig['Progressive Difficulty'].DisableDynamicScaling ?? defaultConfig.progressiveDifficulty.disableDynamicScaling
      }
    }

    if (rawConfig['Teleport']) {
      config.teleport = {
        enable: rawConfig['Teleport'].Enable ?? defaultConfig.teleport.enable
      }
    }

    return config
  }

  async saveConfig(config: BloodyBossConfig): Promise<void> {
    const rawConfig = this.transformToRawConfig(config)
    return invoke('save_config', { config: rawConfig })
  }

  private transformToRawConfig(config: BloodyBossConfig): any {
    return {
      'Ability Compatibility': {
        Enable: config.abilityCompatibility.enable,
        StrictMode: config.abilityCompatibility.strictMode,
        LogWarnings: config.abilityCompatibility.logWarnings,
        AllowCrossType: config.abilityCompatibility.allowCrossType
      },
      'Castle Detection': {
        Enable: config.castleDetection.enable
      },
      'Dynamic Scaling': {
        Enable: config.dynamicScaling.enable,
        BaseHealthMultiplier: config.dynamicScaling.baseHealthMultiplier,
        HealthPerPlayer: config.dynamicScaling.healthPerPlayer,
        DamagePerPlayer: config.dynamicScaling.damagePerPlayer,
        MaxPlayersForScaling: config.dynamicScaling.maxPlayersForScaling
      },
      'Logging': {
        GlobalLogLevel: config.logging.globalLogLevel,
        CategoryLogLevels: config.logging.categoryLogLevels,
        DisabledCategories: config.logging.disabledCategories,
        LogToFile: config.logging.logToFile,
        LogFilePath: config.logging.logFilePath
      },
      'Main': {
        Enabled: config.main.enabled,
        KillMessageBossTemplate: config.main.killMessageBossTemplate,
        SpawnMessageBossTemplate: config.main.spawnMessageBossTemplate,
        DespawnMessageBossTemplate: config.main.despawnMessageBossTemplate,
        BuffForWorldBoss: config.main.buffForWorldBoss,
        PlayersOnlineMultiplier: config.main.playersOnlineMultiplier,
        ClearDropTable: config.main.clearDropTable,
        MinionDamage: config.main.minionDamage,
        RandomBoss: config.main.randomBoss,
        BuffAfterKillingEnabled: config.main.buffAfterKillingEnabled,
        BuffAfterKillingPrefabGUID: config.main.buffAfterKillingPrefabGUID,
        TeamBossEnable: config.main.teamBossEnable,
        AllowBossAchievements: config.main.allowBossAchievements
      },
      'Phase Announcements': {
        Enable: config.phaseAnnouncements.enable,
        AnnounceEveryPhase: config.phaseAnnouncements.announceEveryPhase,
        AnnounceMilestoneSpawns: config.phaseAnnouncements.announceMilestoneSpawns
      },
      'Phase Messages': {
        NormalTemplate: config.phaseMessages.normalTemplate,
        HardTemplate: config.phaseMessages.hardTemplate,
        EpicTemplate: config.phaseMessages.epicTemplate,
        LegendaryTemplate: config.phaseMessages.legendaryTemplate,
        VeteranSuffix: config.phaseMessages.veteranSuffix,
        EnragedSuffix: config.phaseMessages.enragedSuffix,
        EpicPrefix: config.phaseMessages.epicPrefix,
        LegendaryPrefix: config.phaseMessages.legendaryPrefix,
        ConsecutiveInfo: config.phaseMessages.consecutiveInfo
      },
      'Phase Names': {
        Normal: config.phaseNames.normal,
        Hard: config.phaseNames.hard,
        Epic: config.phaseNames.epic,
        Legendary: config.phaseNames.legendary
      },
      'Progressive Difficulty': {
        Enable: config.progressiveDifficulty.enable,
        StartPhase: config.progressiveDifficulty.startPhase,
        MaxPhase: config.progressiveDifficulty.maxPhase,
        HealthMultiplierBase: config.progressiveDifficulty.healthMultiplierBase,
        HealthMultiplierPerPhase: config.progressiveDifficulty.healthMultiplierPerPhase,
        DamageMultiplierBase: config.progressiveDifficulty.damageMultiplierBase,
        DamageMultiplierPerPhase: config.progressiveDifficulty.damageMultiplierPerPhase,
        ResetOnFailure: config.progressiveDifficulty.resetOnFailure,
        PersistAcrossRestarts: config.progressiveDifficulty.persistAcrossRestarts,
        DisableDynamicScaling: config.progressiveDifficulty.disableDynamicScaling
      },
      'Teleport': {
        Enable: config.teleport.enable
      }
    }
  }

  async importConfigFile(path: string): Promise<BloodyBossConfig> {
    try {
      const rawConfig: any = await invoke('import_config_file', { path })
      return this.transformConfig(rawConfig)
    } catch (error) {
      console.error('Failed to import config:', error)
      throw error
    }
  }

  async exportConfigFile(path: string, config: BloodyBossConfig): Promise<void> {
    const rawConfig = this.transformToRawConfig(config)
    return invoke('export_config_file', { path, config: rawConfig })
  }

  parseCfgFile(content: string): BloodyBossConfig {
    const config: any = {
      abilityCompatibility: {},
      castleDetection: {},
      dynamicScaling: {},
      logging: {},
      main: {},
      phaseAnnouncements: {},
      phaseMessages: {},
      phaseNames: {},
      progressiveDifficulty: {},
      teleport: {}
    }

    const lines = content.split('\n')
    let currentSection = ''

    for (const line of lines) {
      const trimmed = line.trim()
      
      // Skip empty lines and comments
      if (!trimmed || trimmed.startsWith('#')) continue

      // Check for section headers
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        currentSection = trimmed.slice(1, -1)
        continue
      }

      // Parse key = value pairs
      const match = trimmed.match(/^(.+?)\s*=\s*(.+)$/)
      if (match) {
        const [, key, value] = match
        const cleanKey = key.trim()
        let cleanValue: any = value.trim()

        // Convert to proper types
        if (cleanValue === 'true') cleanValue = true
        else if (cleanValue === 'false') cleanValue = false
        else if (!isNaN(Number(cleanValue))) cleanValue = Number(cleanValue)

        // Map to our config structure
        switch (currentSection) {
          case 'Ability Compatibility':
            if (cleanKey === 'Enable') config.abilityCompatibility.enable = cleanValue
            else if (cleanKey === 'StrictMode') config.abilityCompatibility.strictMode = cleanValue
            else if (cleanKey === 'LogWarnings') config.abilityCompatibility.logWarnings = cleanValue
            else if (cleanKey === 'AllowCrossType') config.abilityCompatibility.allowCrossType = cleanValue
            break

          case 'Castle Detection':
            if (cleanKey === 'Enable') config.castleDetection.enable = cleanValue
            break

          case 'Dynamic Scaling':
            if (cleanKey === 'Enable') config.dynamicScaling.enable = cleanValue
            else if (cleanKey === 'BaseHealthMultiplier') config.dynamicScaling.baseHealthMultiplier = cleanValue
            else if (cleanKey === 'HealthPerPlayer') config.dynamicScaling.healthPerPlayer = cleanValue
            else if (cleanKey === 'DamagePerPlayer') config.dynamicScaling.damagePerPlayer = cleanValue
            else if (cleanKey === 'MaxPlayersForScaling') config.dynamicScaling.maxPlayersForScaling = cleanValue
            break

          case 'Logging':
            if (cleanKey === 'GlobalLogLevel') config.logging.globalLogLevel = cleanValue
            else if (cleanKey === 'CategoryLogLevels') config.logging.categoryLogLevels = cleanValue
            else if (cleanKey === 'DisabledCategories') config.logging.disabledCategories = cleanValue
            else if (cleanKey === 'LogToFile') config.logging.logToFile = cleanValue
            else if (cleanKey === 'LogFilePath') config.logging.logFilePath = cleanValue
            break

          case 'Main':
            if (cleanKey === 'Enabled') config.main.enabled = cleanValue
            else if (cleanKey === 'KillMessageBossTemplate') config.main.killMessageBossTemplate = cleanValue
            else if (cleanKey === 'SpawnMessageBossTemplate') config.main.spawnMessageBossTemplate = cleanValue
            else if (cleanKey === 'DespawnMessageBossTemplate') config.main.despawnMessageBossTemplate = cleanValue
            else if (cleanKey === 'BuffForWorldBoss') config.main.buffForWorldBoss = cleanValue
            else if (cleanKey === 'PlayersOnlineMultiplier') config.main.playersOnlineMultiplier = cleanValue
            else if (cleanKey === 'ClearDropTable') config.main.clearDropTable = cleanValue
            else if (cleanKey === 'MinionDamage') config.main.minionDamage = cleanValue
            else if (cleanKey === 'RandomBoss') config.main.randomBoss = cleanValue
            else if (cleanKey === 'BuffAfterKillingEnabled') config.main.buffAfterKillingEnabled = cleanValue
            else if (cleanKey === 'BuffAfterKillingPrefabGUID') config.main.buffAfterKillingPrefabGUID = cleanValue
            else if (cleanKey === 'TeamBossEnable') config.main.teamBossEnable = cleanValue
            else if (cleanKey === 'AllowBossAchievements') config.main.allowBossAchievements = cleanValue
            break

          case 'Phase Announcements':
            if (cleanKey === 'Enable') config.phaseAnnouncements.enable = cleanValue
            else if (cleanKey === 'AnnounceEveryPhase') config.phaseAnnouncements.announceEveryPhase = cleanValue
            else if (cleanKey === 'AnnounceMilestoneSpawns') config.phaseAnnouncements.announceMilestoneSpawns = cleanValue
            break

          case 'Phase Messages':
            if (cleanKey === 'NormalTemplate') config.phaseMessages.normalTemplate = cleanValue
            else if (cleanKey === 'HardTemplate') config.phaseMessages.hardTemplate = cleanValue
            else if (cleanKey === 'EpicTemplate') config.phaseMessages.epicTemplate = cleanValue
            else if (cleanKey === 'LegendaryTemplate') config.phaseMessages.legendaryTemplate = cleanValue
            else if (cleanKey === 'VeteranSuffix') config.phaseMessages.veteranSuffix = cleanValue
            else if (cleanKey === 'EnragedSuffix') config.phaseMessages.enragedSuffix = cleanValue
            else if (cleanKey === 'EpicPrefix') config.phaseMessages.epicPrefix = cleanValue
            else if (cleanKey === 'LegendaryPrefix') config.phaseMessages.legendaryPrefix = cleanValue
            else if (cleanKey === 'ConsecutiveInfo') config.phaseMessages.consecutiveInfo = cleanValue
            break

          case 'Phase Names':
            if (cleanKey === 'Normal') config.phaseNames.normal = cleanValue
            else if (cleanKey === 'Hard') config.phaseNames.hard = cleanValue
            else if (cleanKey === 'Epic') config.phaseNames.epic = cleanValue
            else if (cleanKey === 'Legendary') config.phaseNames.legendary = cleanValue
            break

          case 'Progressive Difficulty':
            if (cleanKey === 'Enable') config.progressiveDifficulty.enable = cleanValue
            else if (cleanKey === 'StartPhase') config.progressiveDifficulty.startPhase = cleanValue
            else if (cleanKey === 'MaxPhase') config.progressiveDifficulty.maxPhase = cleanValue
            else if (cleanKey === 'HealthMultiplierBase') config.progressiveDifficulty.healthMultiplierBase = cleanValue
            else if (cleanKey === 'HealthMultiplierPerPhase') config.progressiveDifficulty.healthMultiplierPerPhase = cleanValue
            else if (cleanKey === 'DamageMultiplierBase') config.progressiveDifficulty.damageMultiplierBase = cleanValue
            else if (cleanKey === 'DamageMultiplierPerPhase') config.progressiveDifficulty.damageMultiplierPerPhase = cleanValue
            else if (cleanKey === 'ResetOnFailure') config.progressiveDifficulty.resetOnFailure = cleanValue
            else if (cleanKey === 'PersistAcrossRestarts') config.progressiveDifficulty.persistAcrossRestarts = cleanValue
            else if (cleanKey === 'DisableDynamicScaling') config.progressiveDifficulty.disableDynamicScaling = cleanValue
            break

          case 'Teleport':
            if (cleanKey === 'Enable') config.teleport.enable = cleanValue
            break
        }
      }
    }

    return config as BloodyBossConfig
  }

  generateCfgFile(config: BloodyBossConfig): string {
    const lines: string[] = []

    // Ability Compatibility
    lines.push('[Ability Compatibility]')
    lines.push('')
    lines.push('## Enable ability compatibility checking when swapping VBlood abilities')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: true')
    lines.push(`Enable = ${config.abilityCompatibility.enable}`)
    lines.push('')
    lines.push('## Block ability swaps if incompatibilities are detected (false = allow with warnings)')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: false')
    lines.push(`StrictMode = ${config.abilityCompatibility.strictMode}`)
    lines.push('')
    lines.push('## Log compatibility warnings to server console')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: true')
    lines.push(`LogWarnings = ${config.abilityCompatibility.logWarnings}`)
    lines.push('')
    lines.push('## Allow abilities across different creature types (e.g., vampire abilities on beasts)')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: false')
    lines.push(`AllowCrossType = ${config.abilityCompatibility.allowCrossType}`)
    lines.push('')

    // Castle Detection
    lines.push('[Castle Detection]')
    lines.push('')
    lines.push('## Enable castle territory detection to prevent boss spawns inside player bases')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: true')
    lines.push(`Enable = ${config.castleDetection.enable}`)
    lines.push('')

    // Dynamic Scaling
    lines.push('[Dynamic Scaling]')
    lines.push('')
    lines.push('## Enable dynamic scaling based on online players')
    lines.push('# Setting type: Boolean')
    lines.push('# Default value: false')
    lines.push(`Enable = ${config.dynamicScaling.enable}`)
    lines.push('')
    lines.push('## Base health multiplier for all bosses')
    lines.push('# Setting type: Single')
    lines.push('# Default value: 1')
    lines.push(`BaseHealthMultiplier = ${config.dynamicScaling.baseHealthMultiplier}`)
    lines.push('')
    lines.push('## Additional health percentage per online player (0.25 = +25%)')
    lines.push('# Setting type: Single')
    lines.push('# Default value: 0.25')
    lines.push(`HealthPerPlayer = ${config.dynamicScaling.healthPerPlayer}`)
    lines.push('')
    lines.push('## Additional damage percentage per online player (0.15 = +15%)')
    lines.push('# Setting type: Single')
    lines.push('# Default value: 0.15')
    lines.push(`DamagePerPlayer = ${config.dynamicScaling.damagePerPlayer}`)
    lines.push('')
    lines.push('## Maximum players considered for scaling')
    lines.push('# Setting type: Int32')
    lines.push('# Default value: 10')
    lines.push(`MaxPlayersForScaling = ${config.dynamicScaling.maxPlayersForScaling}`)
    lines.push('')

    // Add all other sections similarly...
    // This is a simplified version. In a real implementation, you'd add all sections

    return lines.join('\n')
  }
}

export const configService = new ConfigService()
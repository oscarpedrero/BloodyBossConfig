import { invoke } from '@tauri-apps/api/core'
import { BossEncounter, ValidationResult } from '../types'

export const bossService = {
  async loadBosses(): Promise<BossEncounter[]> {
    return await invoke('load_boss_config')
  },

  async saveBosses(bosses: BossEncounter[]): Promise<void> {
    await invoke('save_boss_config', { bosses })
  },

  async validateBoss(boss: BossEncounter): Promise<ValidationResult> {
    return await invoke('validate_boss', { boss })
  },

  async importBossesFile(path: string): Promise<BossEncounter[]> {
    console.log('Importing bosses from path:', path)
    try {
      const result = await invoke<BossEncounter[]>('import_bosses_file', { path })
      console.log('Import successful, received bosses:', result?.length || 0)
      return result
    } catch (error) {
      console.error('Import service error:', error)
      throw error
    }
  },

  async exportBossesFile(path: string, bosses: BossEncounter[]): Promise<void> {
    await invoke('export_bosses_file', { path, bosses })
  },

  async getServerPath(): Promise<string> {
    return await invoke('get_server_path')
  }
}
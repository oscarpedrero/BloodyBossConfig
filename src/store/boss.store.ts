import { create } from 'zustand'
import { BossEncounter } from '../types'
import { bossService } from '../services/boss.service'

interface BossStore {
  bosses: BossEncounter[]
  loading: boolean
  error: string | null
  selectedBoss: BossEncounter | null
  
  loadBosses: () => Promise<void>
  saveBosses: () => Promise<void>
  addBoss: (boss: BossEncounter) => void
  updateBoss: (nameHash: string, boss: BossEncounter) => void
  deleteBoss: (nameHash: string) => void
  selectBoss: (nameHash: string | null) => void
}

export const useBossStore = create<BossStore>((set, get) => ({
  bosses: [],
  loading: false,
  error: null,
  selectedBoss: null,

  loadBosses: async () => {
    set({ loading: true, error: null })
    try {
      const bosses = await bossService.loadBosses()
      set({ bosses, loading: false })
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to load bosses', loading: false })
    }
  },

  saveBosses: async () => {
    set({ loading: true, error: null })
    try {
      await bossService.saveBosses(get().bosses)
      set({ loading: false })
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to save bosses', loading: false })
    }
  },

  addBoss: (boss) => {
    set((state) => ({ bosses: [...state.bosses, boss] }))
  },

  updateBoss: (nameHash, boss) => {
    set((state) => ({
      bosses: state.bosses.map((b) => (b.nameHash === nameHash ? boss : b))
    }))
  },

  deleteBoss: (nameHash) => {
    set((state) => ({
      bosses: state.bosses.filter((b) => b.nameHash !== nameHash),
      selectedBoss: state.selectedBoss?.nameHash === nameHash ? null : state.selectedBoss
    }))
  },

  selectBoss: (nameHash) => {
    const boss = nameHash ? get().bosses.find((b) => b.nameHash === nameHash) || null : null
    set({ selectedBoss: boss })
  }
}))
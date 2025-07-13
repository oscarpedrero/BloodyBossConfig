import { z } from 'zod'

export const locationSchema = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number()
})

export const mechanicTriggerSchema = z.object({
  type: z.enum(['timer', 'hp_threshold', 'phase', 'player_count', 'custom']),
  value: z.number(),
  condition: z.string().optional(),
  repeat: z.boolean().optional(),
  cooldown: z.number().optional()
})

export const bossMechanicSchema = z.object({
  id: z.string(),
  type: z.enum(['stun', 'aoe', 'slow', 'absorb', 'weaken', 'fear', 'summon', 'trap']),
  enabled: z.boolean(),
  trigger: mechanicTriggerSchema,
  parameters: z.record(z.string(), z.any())
})

export const bossPhaseSchema = z.object({
  name: z.string(),
  hpThreshold: z.number().min(0).max(100),
  mechanics: z.array(z.string()),
  modifiers: z.object({
    damageMultiplier: z.number().optional(),
    speedMultiplier: z.number().optional(),
    resistances: z.record(z.string(), z.number()).optional()
  }).optional()
})

export const rewardItemSchema = z.object({
  prefabGuid: z.string(),
  quantity: z.number().min(1),
  chance: z.number().min(0).max(100)
})

export const bossEncounterSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  prefabGuid: z.string().min(1, 'Prefab GUID is required'),
  level: z.number().min(1).max(100),
  multiplier: z.number().int().min(1).max(10),
  location: locationSchema,
  spawnType: z.enum(['world', 'manual', 'scheduled']),
  lifeTime: z.number().optional(),
  immuneToSun: z.boolean().optional(),
  immuneToHolyArea: z.boolean().optional(),
  mechanics: z.array(bossMechanicSchema),
  phases: z.array(bossPhaseSchema).optional(),
  rewards: z.array(rewardItemSchema).optional(),
  schedule: z.object({
    days: z.array(z.string()),
    times: z.array(z.string())
  }).optional(),
  customData: z.record(z.string(), z.any()).optional()
})

export type BossEncounterForm = z.infer<typeof bossEncounterSchema>
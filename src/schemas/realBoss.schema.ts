import { z } from 'zod'

export const unitStatsSchema = z.object({
  PhysicalPower: z.number().min(0, 'Physical Power cannot be negative'),
  SpellPower: z.number().min(0, 'Spell Power cannot be negative'),
  ResourcePower: z.number().min(0, 'Resource Power cannot be negative'),
  SiegePower: z.number().min(0, 'Siege Power cannot be negative'),
  PhysicalResistance: z.number(),
  SpellResistance: z.number(),
  FireResistance: z.number().int('Fire Resistance must be a whole number'),
  PassiveHealthRegen: z.number(),
  CCReduction: z.number().int('CC Reduction must be a whole number'),
  HealthRecovery: z.number(),
  DamageReduction: z.number(),
  HealingReceived: z.number()
})

export const rewardItemSchema = z.object({
  name: z.string().min(1, 'Item name is required'),
  ItemID: z.number().int('Item ID must be a number').refine(val => val !== 0, 'Item ID is required'),
  Stack: z.number().int('Stack must be a whole number').min(1, 'Stack must be at least 1'),
  Chance: z.number().int('Chance must be a whole number').min(0, 'Chance cannot be negative').max(100, 'Chance cannot exceed 100%'),
  Color: z.string().min(1, 'Color is required').regex(/^#[0-9A-Fa-f]{6}$/, 'Color must be a valid hex color (e.g., #daa520)')
})

export const abilitySwapSchema = z.object({
  AbilityGUID: z.number().optional(),
  SourcePrefabGUID: z.number(),
  SourceVBloodName: z.string(),
  SlotIndex: z.number().min(0).max(9),
  Description: z.string()
})

const mechanicTriggerSchema = z.object({
  Type: z.enum(['hp_threshold', 'time', 'players']),
  Value: z.number(),
  Comparison: z.enum(['less_than', 'greater_than', 'equals']),
  OneTime: z.boolean(),
  RepeatInterval: z.number(),
  CompoundConditions: z.any().nullable(),
  CompoundOperator: z.enum(['AND', 'OR']),
  TimeWindow: z.number(),
  AddName: z.string().nullable(),
  AddCount: z.number()
})

const mechanicConfigSchema = z.object({
  Id: z.string(),
  Type: z.string(),
  Enabled: z.boolean(),
  Trigger: mechanicTriggerSchema,
  Parameters: z.record(z.string(), z.any()),
  HasTriggered: z.boolean(),
  LastTriggered: z.string().nullable(),
  TriggerCount: z.number(),
  IsExpired: z.boolean()
})

export const realBossEncounterSchema = z.object({
  name: z.string().min(1, 'Boss name is required'),
  nameHash: z.string(),
  AssetName: z.string().min(1, 'Asset name is required'),
  Hour: z.string().regex(/^\d{2}:\d{2}$/, 'Hour must be in HH:MM format'),
  HourDespawn: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, 'Hour despawn must be in HH:MM or HH:MM:SS format').optional(),
  PrefabGUID: z.number().refine(val => val !== 0, 'Please select a VBlood prefab'),
  level: z.number().min(1, 'Level must be at least 1').max(100, 'Level cannot exceed 100'),
  multiplier: z.number().int('Multiplier must be a whole number').min(1, 'Multiplier must be at least 1').max(10, 'Multiplier cannot exceed 10'),
  items: z.array(rewardItemSchema),
  bossSpawn: z.boolean(),
  Lifetime: z.number().min(0),
  x: z.number(),
  y: z.number(),
  z: z.number(),
  unitStats: unitStatsSchema,
  ConsecutiveSpawns: z.number().min(0),
  LastSuccessfulKill: z.string().nullable().optional(),
  CurrentDifficultyMultiplier: z.number().min(0.1).max(10),
  IsPaused: z.boolean(),
  PausedAt: z.string().nullable().optional(),
  LastSpawn: z.string().nullable().optional(),
  LastAnnouncedPhase: z.number().min(1),
  Mechanics: z.array(mechanicConfigSchema),
  AbilitySwaps: z.record(z.string(), abilitySwapSchema)
})

export type RealBossEncounterForm = z.infer<typeof realBossEncounterSchema>
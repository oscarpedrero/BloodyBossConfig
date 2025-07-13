import { MechanicType } from '../types/mechanics'

export type ParameterType = 'text' | 'number' | 'select' | 'boolean' | 'percentage'

export interface ParameterDefinition {
  key: string
  label: string
  type: ParameterType
  defaultValue: any
  description?: string
  placeholder?: string
  min?: number
  max?: number
  step?: number
  options?: Array<{ value: string; label: string }>
  condition?: (params: any) => boolean // Show parameter only if condition is met
}

export interface MechanicParameterConfig {
  [mechanicType: string]: ParameterDefinition[]
}

export const mechanicParametersConfig: MechanicParameterConfig = {
  absorb: [
    {
      key: 'absorb_type',
      label: 'Absorb Type',
      type: 'select',
      defaultValue: 'health',
      options: [
        { value: 'health', label: 'Health - Heals boss' },
        { value: 'shield', label: 'Shield - Transfers shields' },
        { value: 'all', label: 'All - Both health and shields' }
      ]
    },
    {
      key: 'amount',
      label: 'Amount per Player',
      type: 'number',
      defaultValue: 100,
      min: 1,
      max: 1000,
      description: 'Amount to absorb from each player'
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 25,
      min: 5,
      max: 100,
      description: 'Range to check for players'
    },
    {
      key: 'min_players',
      label: 'Minimum Players',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
      description: 'If fewer players, entire group is punished (0 = disabled)'
    },
    {
      key: 'punish_damage',
      label: 'Punishment Damage',
      type: 'number',
      defaultValue: 500,
      min: 0,
      max: 5000,
      description: 'Damage to all players if minimum not met'
    },
    {
      key: 'continuous',
      label: 'Continuous Mode',
      type: 'boolean',
      defaultValue: false,
      description: 'Drain over time instead of instant'
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 30,
      description: 'Duration in seconds (only for continuous mode)',
      condition: (params) => params.continuous === true
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '💀 The void hungers for your essence!',
      placeholder: 'Message to display when mechanic triggers'
    }
  ],

  aoe: [
    {
      key: 'aoe_type',
      label: 'Damage Type',
      type: 'select',
      defaultValue: 'fire',
      options: [
        { value: 'fire', label: 'Fire' },
        { value: 'frost', label: 'Frost' },
        { value: 'blood', label: 'Blood' },
        { value: 'holy', label: 'Holy' },
        { value: 'shadow', label: 'Shadow' },
        { value: 'poison', label: 'Poison' },
        { value: 'electric', label: 'Electric' },
        { value: 'explosion', label: 'Explosion (instant)' }
      ]
    },
    {
      key: 'pattern',
      label: 'Pattern',
      type: 'select',
      defaultValue: 'center',
      options: [
        { value: 'center', label: 'Center - At boss location' },
        { value: 'ring', label: 'Ring - Around boss' },
        { value: 'random', label: 'Random - Random positions' },
        { value: 'cross', label: 'Cross - X pattern' },
        { value: 'line', label: 'Line - From boss forward' },
        { value: 'players', label: 'Players - At player locations' },
        { value: 'spiral', label: 'Spiral - Outward spiral' }
      ]
    },
    {
      key: 'radius',
      label: 'Radius',
      type: 'number',
      defaultValue: 10,
      min: 3,
      max: 50,
      step: 0.5
    },
    {
      key: 'damage',
      label: 'Damage',
      type: 'number',
      defaultValue: 500,
      min: 100,
      max: 5000,
      step: 50
    },
    {
      key: 'count',
      label: 'Number of Zones',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 20,
      description: 'Number of AoE zones to create'
    },
    {
      key: 'delay',
      label: 'Delay Before Damage',
      type: 'number',
      defaultValue: 1.5,
      min: 0,
      max: 5,
      step: 0.1,
      description: 'Warning time before damage (seconds)'
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 30,
      description: 'How long the area persists (0 = instant)'
    },
    {
      key: 'spread_delay',
      label: 'Spread Delay',
      type: 'number',
      defaultValue: 0.2,
      min: 0,
      max: 2,
      step: 0.1,
      description: 'Delay between each zone (for multiple zones)'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '',
      placeholder: 'The ground trembles with elemental fury!'
    }
  ],

  buffsteal: [
    {
      key: 'steal_count',
      label: 'Buffs to Steal',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10,
      description: 'Maximum number of buffs to steal'
    },
    {
      key: 'target',
      label: 'Target Selection',
      type: 'select',
      defaultValue: 'strongest',
      options: [
        { value: 'strongest', label: 'Strongest - Most buffed player' },
        { value: 'nearest', label: 'Nearest - Closest player' },
        { value: 'random', label: 'Random - Random player' },
        { value: 'all', label: 'All - From all players' }
      ]
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 30,
      min: 10,
      max: 100
    },
    {
      key: 'transfer_to_boss',
      label: 'Transfer to Boss',
      type: 'boolean',
      defaultValue: true,
      description: 'Apply stolen buffs to the boss'
    },
    {
      key: 'buff_duration_multiplier',
      label: 'Duration Multiplier',
      type: 'number',
      defaultValue: 1,
      min: 0.1,
      max: 3,
      step: 0.1,
      description: 'Modify duration of stolen buffs'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🔮 Your power becomes mine!',
      placeholder: 'Message when buffs are stolen'
    }
  ],

  clone: [
    {
      key: 'count',
      label: 'Number of Clones',
      type: 'number',
      defaultValue: 2,
      min: 1,
      max: 10
    },
    {
      key: 'health_percent',
      label: 'Clone Health %',
      type: 'percentage',
      defaultValue: 30,
      min: 10,
      max: 100
    },
    {
      key: 'damage_percent',
      label: 'Clone Damage %',
      type: 'percentage',
      defaultValue: 50,
      min: 10,
      max: 100
    },
    {
      key: 'duration',
      label: 'Clone Duration',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 300,
      description: 'Lifetime in seconds (0 = until killed)'
    },
    {
      key: 'inherit_buffs',
      label: 'Inherit Boss Buffs',
      type: 'boolean',
      defaultValue: false
    },
    {
      key: 'spawn_pattern',
      label: 'Spawn Pattern',
      type: 'select',
      defaultValue: 'circle',
      options: [
        { value: 'circle', label: 'Circle - Around boss' },
        { value: 'line', label: 'Line - In front of boss' },
        { value: 'random', label: 'Random - Random positions' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '👥 Witness my true form!',
      placeholder: 'Message when clones spawn'
    }
  ],

  curse: [
    {
      key: 'curse_type',
      label: 'Curse Type',
      type: 'select',
      defaultValue: 'doom',
      options: [
        { value: 'doom', label: 'Doom - Damage over time' },
        { value: 'hex', label: 'Hex - Reduced healing' },
        { value: 'weakness', label: 'Weakness - Reduced damage' },
        { value: 'vulnerability', label: 'Vulnerability - Take more damage' },
        { value: 'confusion', label: 'Confusion - Random movement' }
      ]
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 15,
      min: 1,
      max: 60
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 20,
      min: 5,
      max: 50
    },
    {
      key: 'stack_count',
      label: 'Stack Count',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 10,
      description: 'Number of curse stacks to apply'
    },
    {
      key: 'spread_on_death',
      label: 'Spread on Death',
      type: 'boolean',
      defaultValue: false,
      description: 'Curse spreads to nearby players on death'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '☠️ A dark curse befalls you!',
      placeholder: 'Message when curse is applied'
    }
  ],

  dispel: [
    {
      key: 'dispel_type',
      label: 'Dispel Type',
      type: 'select',
      defaultValue: 'all',
      options: [
        { value: 'all', label: 'All - Remove everything' },
        { value: 'buffs', label: 'Buffs - Positive effects only' },
        { value: 'debuffs', label: 'Debuffs - Negative effects only' },
        { value: 'shields', label: 'Shields - Shield effects only' },
        { value: 'healing', label: 'Healing - HoT effects only' }
      ]
    },
    {
      key: 'target',
      label: 'Target',
      type: 'select',
      defaultValue: 'enemies',
      options: [
        { value: 'enemies', label: 'Enemies - Players' },
        { value: 'self', label: 'Self - Boss only' },
        { value: 'allies', label: 'Allies - Boss minions' }
      ]
    },
    {
      key: 'max_dispels',
      label: 'Maximum Dispels',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20,
      description: 'Max effects to remove per target'
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 30,
      min: 5,
      max: 100
    },
    {
      key: 'priority',
      label: 'Priority',
      type: 'select',
      defaultValue: 'strongest',
      options: [
        { value: 'strongest', label: 'Strongest First' },
        { value: 'newest', label: 'Newest First' },
        { value: 'oldest', label: 'Oldest First' },
        { value: 'random', label: 'Random' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '✨ Your enchantments fade!',
      placeholder: 'Message when dispel occurs'
    }
  ],

  dot: [
    {
      key: 'dot_type',
      label: 'DoT Type',
      type: 'select',
      defaultValue: 'poison',
      options: [
        { value: 'poison', label: 'Poison' },
        { value: 'bleed', label: 'Bleed' },
        { value: 'burn', label: 'Burn' },
        { value: 'curse', label: 'Curse' },
        { value: 'disease', label: 'Disease' }
      ]
    },
    {
      key: 'damage_per_tick',
      label: 'Damage per Tick',
      type: 'number',
      defaultValue: 50,
      min: 10,
      max: 500
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 60
    },
    {
      key: 'tick_interval',
      label: 'Tick Interval',
      type: 'number',
      defaultValue: 1,
      min: 0.5,
      max: 5,
      step: 0.5,
      description: 'Seconds between damage ticks'
    },
    {
      key: 'spread_chance',
      label: 'Spread Chance %',
      type: 'percentage',
      defaultValue: 0,
      min: 0,
      max: 100,
      description: 'Chance to spread to nearby players'
    },
    {
      key: 'stack_limit',
      label: 'Stack Limit',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 10
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 25,
      min: 5,
      max: 50
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🤢 Corruption seeps into your veins!',
      placeholder: 'Message when DoT is applied'
    }
  ],

  enrage: [
    {
      key: 'damage_multiplier',
      label: 'Damage Multiplier',
      type: 'number',
      defaultValue: 1.5,
      min: 1,
      max: 5,
      step: 0.1
    },
    {
      key: 'movement_speed_multiplier',
      label: 'Movement Speed Multiplier',
      type: 'number',
      defaultValue: 1.0,
      min: 0.5,
      max: 3,
      step: 0.1
    },
    {
      key: 'attack_speed_multiplier',
      label: 'Attack Speed Multiplier',
      type: 'number',
      defaultValue: 1.0,
      min: 0.5,
      max: 3,
      step: 0.1
    },
    {
      key: 'cast_speed_multiplier',
      label: 'Cast Speed Multiplier',
      type: 'number',
      defaultValue: 1.0,
      min: 0.5,
      max: 3,
      step: 0.1
    },
    {
      key: 'cooldown_reduction',
      label: 'Cooldown Reduction %',
      type: 'percentage',
      defaultValue: 0,
      min: 0,
      max: 90
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 300,
      description: 'Duration in seconds (0 = permanent)'
    },
    {
      key: 'visual_effect',
      label: 'Visual Effect',
      type: 'select',
      defaultValue: 'blood_rage',
      options: [
        { value: 'blood_rage', label: 'Blood Rage - Red aura' },
        { value: 'fire_aura', label: 'Fire Aura - Burning effect' },
        { value: 'speed_lines', label: 'Speed Lines - Motion blur' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🔥 The boss enters a blood rage!',
      placeholder: 'Message when enrage starts'
    }
  ],

  fear: [
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 3,
      min: 0.5,
      max: 10,
      step: 0.5
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 20,
      min: 5,
      max: 50
    },
    {
      key: 'target',
      label: 'Target',
      type: 'select',
      defaultValue: 'all',
      options: [
        { value: 'all', label: 'All Players in Range' },
        { value: 'nearest', label: 'Nearest Players' },
        { value: 'farthest', label: 'Farthest Players' },
        { value: 'random', label: 'Random Players' }
      ]
    },
    {
      key: 'max_targets',
      label: 'Maximum Targets',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 20,
      description: 'Max players to fear (0 = no limit)'
    },
    {
      key: 'break_on_damage',
      label: 'Break on Damage',
      type: 'boolean',
      defaultValue: false
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '😱 Terror grips your heart!',
      placeholder: 'Message when fear is applied'
    }
  ],

  heal: [
    {
      key: 'heal_amount',
      label: 'Heal Amount',
      type: 'text',
      defaultValue: '25%',
      placeholder: 'Amount or percentage (e.g. 1000 or 25%)'
    },
    {
      key: 'heal_type',
      label: 'Heal Type',
      type: 'select',
      defaultValue: 'instant',
      options: [
        { value: 'instant', label: 'Instant - Immediate heal' },
        { value: 'hot', label: 'HoT - Heal over time' },
        { value: 'channeled', label: 'Channeled - Interruptible' }
      ]
    },
    {
      key: 'target',
      label: 'Target',
      type: 'select',
      defaultValue: 'self',
      options: [
        { value: 'self', label: 'Self - Boss only' },
        { value: 'allies', label: 'Allies - Nearby minions' },
        { value: 'lowest', label: 'Lowest - Most injured' },
        { value: 'all', label: 'All - Boss and allies' }
      ]
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 30,
      description: 'For HoT or channeled heals (seconds)',
      condition: (params) => params.heal_type !== 'instant'
    },
    {
      key: 'interruptible',
      label: 'Interruptible',
      type: 'boolean',
      defaultValue: true,
      condition: (params) => params.heal_type === 'channeled'
    },
    {
      key: 'visual_effect',
      label: 'Visual Effect',
      type: 'select',
      defaultValue: 'heal_glow',
      options: [
        { value: 'heal_glow', label: 'Heal Glow - Green aura' },
        { value: 'blood_heal', label: 'Blood Heal - Red particles' },
        { value: 'holy_heal', label: 'Holy Heal - Golden light' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '💚 The boss begins to heal!',
      placeholder: 'Message when healing starts'
    }
  ],

  knockback: [
    {
      key: 'force',
      label: 'Knockback Force',
      type: 'number',
      defaultValue: 30,
      min: 10,
      max: 100
    },
    {
      key: 'damage',
      label: 'Impact Damage',
      type: 'number',
      defaultValue: 200,
      min: 0,
      max: 1000
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 15,
      min: 5,
      max: 50
    },
    {
      key: 'direction',
      label: 'Direction',
      type: 'select',
      defaultValue: 'away',
      options: [
        { value: 'away', label: 'Away - From boss' },
        { value: 'random', label: 'Random - Random direction' },
        { value: 'targeted', label: 'Targeted - Specific direction' }
      ]
    },
    {
      key: 'stun_on_landing',
      label: 'Stun on Landing',
      type: 'boolean',
      defaultValue: false
    },
    {
      key: 'stun_duration',
      label: 'Stun Duration',
      type: 'number',
      defaultValue: 1,
      min: 0.5,
      max: 5,
      step: 0.5,
      condition: (params) => params.stun_on_landing === true
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '💨 Get back!',
      placeholder: 'Message when knockback occurs'
    }
  ],

  mindcontrol: [
    {
      key: 'target',
      label: 'Target Selection',
      type: 'select',
      defaultValue: 'random',
      options: [
        { value: 'random', label: 'Random Player' },
        { value: 'strongest', label: 'Strongest Player' },
        { value: 'healer', label: 'Healer (if detected)' },
        { value: 'lowest_health', label: 'Lowest Health' }
      ]
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 15
    },
    {
      key: 'target_allies',
      label: 'Force Attack Allies',
      type: 'boolean',
      defaultValue: true
    },
    {
      key: 'damage_multiplier',
      label: 'Damage Multiplier',
      type: 'number',
      defaultValue: 1,
      min: 0.5,
      max: 2,
      step: 0.1,
      description: 'Damage dealt while controlled'
    },
    {
      key: 'break_on_damage',
      label: 'Break on Damage',
      type: 'boolean',
      defaultValue: false
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🧠 Your mind belongs to me!',
      placeholder: 'Message when mind control starts'
    }
  ],

  phase: [
    {
      key: 'phase_name',
      label: 'Phase Name',
      type: 'text',
      defaultValue: 'Phase 2',
      placeholder: 'e.g. Enraged Phase, Final Form'
    },
    {
      key: 'clear_debuffs',
      label: 'Clear Debuffs',
      type: 'boolean',
      defaultValue: true,
      description: 'Remove all negative effects from boss'
    },
    {
      key: 'heal_percent',
      label: 'Heal Percent',
      type: 'percentage',
      defaultValue: 0,
      min: 0,
      max: 100,
      description: 'Heal boss by this percentage'
    },
    {
      key: 'apply_buff',
      label: 'Apply Buff (PrefabGUID)',
      type: 'number',
      defaultValue: 0,
      description: 'Buff to apply during phase transition (0 = none)'
    },
    {
      key: 'ability_swap_count',
      label: 'Abilities to Swap',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 5,
      description: 'Number of abilities to change'
    },
    {
      key: 'visual_transformation',
      label: 'Visual Transformation',
      type: 'boolean',
      defaultValue: false,
      description: 'Apply visual changes to boss'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '⚔️ The battle intensifies!',
      placeholder: 'Message for phase transition'
    }
  ],

  pull: [
    {
      key: 'force',
      label: 'Pull Force',
      type: 'number',
      defaultValue: 50,
      min: 10,
      max: 100
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 30,
      min: 10,
      max: 100
    },
    {
      key: 'damage_on_arrival',
      label: 'Damage on Arrival',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 1000,
      description: 'Damage when pulled to boss'
    },
    {
      key: 'pull_type',
      label: 'Pull Type',
      type: 'select',
      defaultValue: 'instant',
      options: [
        { value: 'instant', label: 'Instant - Immediate pull' },
        { value: 'gradual', label: 'Gradual - Over time' },
        { value: 'vortex', label: 'Vortex - Spinning pull' }
      ]
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
      description: 'For gradual/vortex pulls (seconds)',
      condition: (params) => params.pull_type !== 'instant'
    },
    {
      key: 'can_resist',
      label: 'Can Be Resisted',
      type: 'boolean',
      defaultValue: false,
      description: 'Players can resist with abilities'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🌀 You cannot escape!',
      placeholder: 'Message when pull occurs'
    }
  ],

  reflect: [
    {
      key: 'reflect_type',
      label: 'Reflect Type',
      type: 'select',
      defaultValue: 'all',
      options: [
        { value: 'all', label: 'All - All damage' },
        { value: 'physical', label: 'Physical - Melee/ranged' },
        { value: 'spell', label: 'Spell - Magic damage' },
        { value: 'projectile', label: 'Projectile - Ranged only' }
      ]
    },
    {
      key: 'reflect_percent',
      label: 'Reflect Percentage',
      type: 'percentage',
      defaultValue: 100,
      min: 10,
      max: 200,
      description: 'Percentage of damage reflected'
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 30
    },
    {
      key: 'damage_cap',
      label: 'Damage Cap',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10000,
      description: 'Max damage per reflection (0 = no cap)'
    },
    {
      key: 'visual_shield',
      label: 'Visual Shield',
      type: 'boolean',
      defaultValue: true,
      description: 'Show reflective barrier effect'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🛡️ A reflective barrier surrounds the boss!',
      placeholder: 'Message when reflect activates'
    }
  ],

  root: [
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 15,
      min: 5,
      max: 50
    },
    {
      key: 'break_on_damage',
      label: 'Break on Damage',
      type: 'boolean',
      defaultValue: false
    },
    {
      key: 'damage_threshold',
      label: 'Damage Threshold',
      type: 'number',
      defaultValue: 500,
      min: 100,
      max: 5000,
      description: 'Damage needed to break root',
      condition: (params) => params.break_on_damage === true
    },
    {
      key: 'root_type',
      label: 'Root Type',
      type: 'select',
      defaultValue: 'nature',
      options: [
        { value: 'nature', label: 'Nature - Vines' },
        { value: 'frost', label: 'Frost - Ice' },
        { value: 'shadow', label: 'Shadow - Dark tendrils' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🌿 Roots bind you in place!',
      placeholder: 'Message when root is applied'
    }
  ],

  shield: [
    {
      key: 'shield_type',
      label: 'Shield Type',
      type: 'select',
      defaultValue: 'immune',
      options: [
        { value: 'immune', label: 'Immune - Blocks all damage' },
        { value: 'absorb', label: 'Absorb - Absorbs X damage' },
        { value: 'reflect', label: 'Reflect - Reflects damage' }
      ]
    },
    {
      key: 'shield_amount',
      label: 'Shield Amount',
      type: 'number',
      defaultValue: 10000,
      min: 1000,
      max: 100000,
      condition: (params) => params.shield_type === 'absorb'
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 60
    },
    {
      key: 'can_move',
      label: 'Can Move',
      type: 'boolean',
      defaultValue: false,
      description: 'Boss can move while shielded'
    },
    {
      key: 'can_cast',
      label: 'Can Cast',
      type: 'boolean',
      defaultValue: false,
      description: 'Boss can use abilities while shielded'
    },
    {
      key: 'visual_effect',
      label: 'Visual Effect',
      type: 'select',
      defaultValue: 'holy_shield',
      options: [
        { value: 'holy_shield', label: 'Holy Shield - Golden' },
        { value: 'frost_shield', label: 'Frost Shield - Ice' },
        { value: 'blood_shield', label: 'Blood Shield - Red' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🛡️ A divine shield protects the boss!',
      placeholder: 'Message when shield activates'
    }
  ],

  silence: [
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 20,
      min: 5,
      max: 50
    },
    {
      key: 'silence_type',
      label: 'Silence Type',
      type: 'select',
      defaultValue: 'all',
      options: [
        { value: 'all', label: 'All - All abilities' },
        { value: 'spells', label: 'Spells - Magic only' },
        { value: 'ultimate', label: 'Ultimate - Ultimate ability' }
      ]
    },
    {
      key: 'prevent_consumables',
      label: 'Prevent Consumables',
      type: 'boolean',
      defaultValue: false,
      description: 'Also prevents using potions/items'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🤐 Silence falls upon you!',
      placeholder: 'Message when silence is applied'
    }
  ],

  slow: [
    {
      key: 'slow_amount',
      label: 'Slow Percentage',
      type: 'percentage',
      defaultValue: 50,
      min: 10,
      max: 90
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 30
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 25,
      min: 5,
      max: 50
    },
    {
      key: 'energy_drain',
      label: 'Energy Drain',
      type: 'boolean',
      defaultValue: true,
      description: 'Also drains energy/stamina'
    },
    {
      key: 'min_players',
      label: 'Minimum Players',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
      description: 'Punish all if fewer players (0 = disabled)'
    },
    {
      key: 'punish_slow',
      label: 'Punishment Slow %',
      type: 'percentage',
      defaultValue: 90,
      min: 50,
      max: 99,
      condition: (params) => params.min_players > 0
    },
    {
      key: 'visual_effect',
      label: 'Visual Effect',
      type: 'select',
      defaultValue: 'frost',
      options: [
        { value: 'frost', label: 'Frost - Ice crystals' },
        { value: 'mud', label: 'Mud - Earth effect' },
        { value: 'web', label: 'Web - Spider webs' }
      ]
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '❄️ Your movements slow to a crawl!',
      placeholder: 'Message when slow is applied'
    }
  ],

  stun: [
    {
      key: 'target',
      label: 'Target Selection',
      type: 'select',
      defaultValue: 'random',
      options: [
        { value: 'random', label: 'Random Player' },
        { value: 'nearest', label: 'Nearest Player' },
        { value: 'farthest', label: 'Farthest Player' },
        { value: 'all', label: 'All Players in Range' }
      ]
    },
    {
      key: 'duration',
      label: 'Stun Duration',
      type: 'number',
      defaultValue: 3,
      min: 0.5,
      max: 10,
      step: 0.5
    },
    {
      key: 'mark_duration',
      label: 'Warning Duration',
      type: 'number',
      defaultValue: 2.5,
      min: 1,
      max: 5,
      step: 0.5,
      description: 'Time before stun applies'
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 50,
      description: 'AoE radius (0 = single target)'
    },
    {
      key: 'max_targets',
      label: 'Maximum Targets',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 20,
      condition: (params) => params.target !== 'all'
    },
    {
      key: 'flash_before_stun',
      label: 'Flash Warning',
      type: 'boolean',
      defaultValue: true,
      description: 'Rapid flash before stun hits'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '👁️ A psychic eye marks its target!',
      placeholder: 'Message when marking begins'
    }
  ],

  summon: [
    {
      key: 'summon_type',
      label: 'Summon Type',
      type: 'select',
      defaultValue: 'prefab',
      options: [
        { value: 'prefab', label: 'Specific NPC (by PrefabGUID)' },
        { value: 'clone', label: 'Clone of Boss' },
        { value: 'random', label: 'Random from List' }
      ]
    },
    {
      key: 'prefab_guid',
      label: 'Prefab GUID',
      type: 'number',
      defaultValue: -1905691330,
      description: 'NPC to summon (use .bb npc-list)',
      condition: (params) => params.summon_type === 'prefab'
    },
    {
      key: 'count',
      label: 'Number to Summon',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 20
    },
    {
      key: 'pattern',
      label: 'Spawn Pattern',
      type: 'select',
      defaultValue: 'circle',
      options: [
        { value: 'circle', label: 'Circle - Around boss' },
        { value: 'line', label: 'Line - In front' },
        { value: 'random', label: 'Random - Scattered' },
        { value: 'corners', label: 'Corners - Arena corners' }
      ]
    },
    {
      key: 'level',
      label: 'Summon Level',
      type: 'number',
      defaultValue: 50,
      min: 1,
      max: 100
    },
    {
      key: 'lifetime',
      label: 'Lifetime',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 300,
      description: 'Seconds before despawn (0 = permanent)'
    },
    {
      key: 'despawn_on_boss_death',
      label: 'Despawn on Boss Death',
      type: 'boolean',
      defaultValue: true
    },
    {
      key: 'inherit_boss_stats',
      label: 'Inherit Boss Stats',
      type: 'boolean',
      defaultValue: false,
      description: 'Scale summons based on boss stats'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '⚔️ Minions answer the call!',
      placeholder: 'Message when summons appear'
    }
  ],

  teleport: [
    {
      key: 'teleport_type',
      label: 'Teleport Type',
      type: 'select',
      defaultValue: 'random',
      options: [
        { value: 'random', label: 'Random - Random location' },
        { value: 'behind_player', label: 'Behind Player - Backstab' },
        { value: 'center', label: 'Center - Arena center' },
        { value: 'swap', label: 'Swap - Switch with player' }
      ]
    },
    {
      key: 'range',
      label: 'Teleport Range',
      type: 'number',
      defaultValue: 30,
      min: 10,
      max: 100,
      condition: (params) => params.teleport_type === 'random'
    },
    {
      key: 'after_effect',
      label: 'After Effect',
      type: 'select',
      defaultValue: 'none',
      options: [
        { value: 'none', label: 'None' },
        { value: 'explosion', label: 'Explosion - AoE damage' },
        { value: 'stun', label: 'Stun - Brief stun' },
        { value: 'attack', label: 'Attack - Instant attack' }
      ]
    },
    {
      key: 'effect_delay',
      label: 'Effect Delay',
      type: 'number',
      defaultValue: 0.5,
      min: 0,
      max: 3,
      step: 0.1,
      description: 'Delay before after effect',
      condition: (params) => params.after_effect !== 'none'
    },
    {
      key: 'leave_decoy',
      label: 'Leave Decoy',
      type: 'boolean',
      defaultValue: false,
      description: 'Leave illusion at old position'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '',
      placeholder: 'The boss vanishes!'
    }
  ],

  trap: [
    {
      key: 'trap_type',
      label: 'Trap Type',
      type: 'select',
      defaultValue: 'spike',
      options: [
        { value: 'spike', label: 'Spike - Physical damage' },
        { value: 'fire', label: 'Fire - Burning area' },
        { value: 'frost', label: 'Frost - Slowing trap' },
        { value: 'explosive', label: 'Explosive - Delayed blast' },
        { value: 'web', label: 'Web - Root trap' }
      ]
    },
    {
      key: 'count',
      label: 'Number of Traps',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 30
    },
    {
      key: 'pattern',
      label: 'Placement Pattern',
      type: 'select',
      defaultValue: 'random',
      options: [
        { value: 'random', label: 'Random - Scattered' },
        { value: 'circle', label: 'Circle - Ring pattern' },
        { value: 'grid', label: 'Grid - Organized' },
        { value: 'path', label: 'Path - Along movement' }
      ]
    },
    {
      key: 'trigger_radius',
      label: 'Trigger Radius',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10
    },
    {
      key: 'damage',
      label: 'Trap Damage',
      type: 'number',
      defaultValue: 300,
      min: 50,
      max: 2000
    },
    {
      key: 'arm_delay',
      label: 'Arm Delay',
      type: 'number',
      defaultValue: 1,
      min: 0,
      max: 5,
      description: 'Seconds before trap activates'
    },
    {
      key: 'lifetime',
      label: 'Trap Lifetime',
      type: 'number',
      defaultValue: 60,
      min: 10,
      max: 300,
      description: 'Seconds before trap expires'
    },
    {
      key: 'visible',
      label: 'Visible Traps',
      type: 'boolean',
      defaultValue: true,
      description: 'Players can see armed traps'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '⚠️ Watch your step!',
      placeholder: 'Message when traps are placed'
    }
  ],

  vision: [
    {
      key: 'vision_type',
      label: 'Vision Type',
      type: 'select',
      defaultValue: 'darkness',
      options: [
        { value: 'darkness', label: 'Darkness - Reduced vision' },
        { value: 'blind', label: 'Blind - Near total blindness' },
        { value: 'fog', label: 'Fog - Misty vision' },
        { value: 'hallucination', label: 'Hallucination - False images' }
      ]
    },
    {
      key: 'intensity',
      label: 'Effect Intensity',
      type: 'percentage',
      defaultValue: 75,
      min: 25,
      max: 95,
      description: 'How much vision is reduced'
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 30
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 30,
      min: 10,
      max: 100
    },
    {
      key: 'fade_in_time',
      label: 'Fade In Time',
      type: 'number',
      defaultValue: 1,
      min: 0,
      max: 3,
      step: 0.5,
      description: 'Seconds to reach full effect'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '🌑 Darkness engulfs you!',
      placeholder: 'Message when vision is impaired'
    }
  ],

  weaken: [
    {
      key: 'weaken_type',
      label: 'Weaken Type',
      type: 'select',
      defaultValue: 'all',
      options: [
        { value: 'all', label: 'All Stats' },
        { value: 'physical', label: 'Physical Power' },
        { value: 'spell', label: 'Spell Power' },
        { value: 'resistances', label: 'Resistances' },
        { value: 'healing', label: 'Healing Received' }
      ]
    },
    {
      key: 'amount',
      label: 'Reduction Percentage',
      type: 'percentage',
      defaultValue: 30,
      min: 10,
      max: 90
    },
    {
      key: 'duration',
      label: 'Duration',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 60
    },
    {
      key: 'radius',
      label: 'Effect Radius',
      type: 'number',
      defaultValue: 25,
      min: 5,
      max: 50
    },
    {
      key: 'stack_limit',
      label: 'Stack Limit',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 5,
      description: 'Maximum stacks of weakness'
    },
    {
      key: 'spread_on_death',
      label: 'Spread on Death',
      type: 'boolean',
      defaultValue: false,
      description: 'Weakness spreads when player dies'
    },
    {
      key: 'announcement',
      label: 'Announcement',
      type: 'text',
      defaultValue: '💔 Your strength fades!',
      placeholder: 'Message when weakened'
    }
  ]
}

// Helper function to get default parameters for a mechanic type
export function getDefaultParameters(mechanicType: MechanicType): Record<string, any> {
  const config = mechanicParametersConfig[mechanicType]
  if (!config) return {}
  
  const defaults: Record<string, any> = {}
  config.forEach(param => {
    defaults[param.key] = param.defaultValue
  })
  
  return defaults
}

// Helper function to get visible parameters based on conditions
export function getVisibleParameters(mechanicType: MechanicType, currentValues: Record<string, any>): ParameterDefinition[] {
  const config = mechanicParametersConfig[mechanicType]
  if (!config) return []
  
  return config.filter(param => {
    if (!param.condition) return true
    return param.condition(currentValues)
  })
}
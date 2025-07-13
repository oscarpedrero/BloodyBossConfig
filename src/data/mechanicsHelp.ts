// Help documentation system for BloodyBoss mechanics
import { MechanicType, MechanicCategory, ComplexityLevel, ParameterDefinition } from '../types/mechanics'

export interface VisualEffect {
  id: string
  name: string
  description: string
  type: 'mark' | 'aura' | 'projectile' | 'area' | 'buff' | 'animation'
  duration?: number
  color?: string
  iconUrl?: string
}

export interface CommandExample {
  title: string
  description: string
  command: string
  explanation: string
  difficulty: ComplexityLevel
}

export interface StrategyTip {
  icon: string
  title: string
  description: string
  importance: 'low' | 'medium' | 'high' | 'critical'
}

export interface MechanicRelationship {
  mechanicType: MechanicType
  relationship: 'synergy' | 'conflict' | 'neutral'
  strength: 'weak' | 'moderate' | 'strong'
  description: string
  timing?: 'before' | 'after' | 'simultaneous'
}

export interface MechanicDocumentation {
  id: MechanicType
  name: string
  category: MechanicCategory
  complexity: ComplexityLevel
  
  // Main content
  description: string
  longDescription: string
  useCases: string[]
  warnings: string[]
  
  // Configuration help
  parameters: ParameterDefinition[]
  examples: CommandExample[]
  
  // Strategy guidance
  playerStrategy: StrategyTip[]
  adminStrategy: StrategyTip[]
  
  // Visual information
  visualEffects: VisualEffect[]
  
  // Relationships with other mechanics
  relationships: MechanicRelationship[]
  
  // Metadata
  popularity: number        // 1-10 scale
  balanceDifficulty: number // 1-10 scale how hard to balance
  lastUpdated: string
  documentationQuality: 'incomplete' | 'basic' | 'good' | 'excellent'
}

// Base documentation for the 4 documented mechanics
export const mechanicsDocumentation: Record<string, MechanicDocumentation> = {
  stun: {
    id: 'stun',
    name: 'Stun Mechanic',
    category: 'control',
    complexity: 'basic',
    description: 'Immobilizes target players after displaying a visual warning marker',
    longDescription: 'The Stun Mechanic creates tension by marking players with a floating eye warning before immobilizing them completely. Players cannot move, attack, or use abilities during the stun duration.',
    useCases: [
      'Create pressure during critical boss phases',
      'Punish players who ignore positioning',
      'Set up follow-up AoE mechanics',
      'Force defensive cooldown usage',
      'Create windows for boss special attacks'
    ],
    warnings: [
      'Can be extremely frustrating if overused',
      'Should not overlap with unavoidable damage',
      'Consider escape mechanisms for marked players',
      'Balance mark duration vs stun duration carefully'
    ],
    parameters: [
      {
        key: 'target',
        label: 'Target Selection',
        type: 'select',
        defaultValue: 'random',
        validation: {
          options: ['all', 'nearest', 'farthest', 'random'],
          required: true
        },
        description: 'Determines which players will be targeted for stunning',
        tooltip: 'Random creates unpredictability, nearest punishes melee positioning'
      },
      {
        key: 'duration',
        label: 'Stun Duration',
        type: 'slider',
        defaultValue: '3',
        validation: {
          min: 1,
          max: 10,
          required: true
        },
        description: 'How long players remain stunned in seconds',
        tooltip: '2-4 seconds is usually optimal for most encounters'
      },
      {
        key: 'mark_duration',
        label: 'Warning Duration',
        type: 'slider',
        defaultValue: '2',
        validation: {
          min: 0.5,
          max: 5,
          required: true
        },
        description: 'How long the warning marker appears before stunning',
        tooltip: 'Gives players time to react or prepare defensive abilities'
      },
      {
        key: 'announcement',
        label: 'Announcement Message',
        type: 'string',
        defaultValue: '',
        validation: {
          required: false
        },
        description: 'Optional message broadcast when mechanic triggers',
        tooltip: 'Use for dramatic effect or tactical information'
      }
    ],
    examples: [
      {
        title: 'Basic Random Stun',
        description: 'Simple stun targeting random player at 75% HP',
        command: '.bb mechanic-add "Ancient Dracula" "stun" --hp 75 --target random --duration 3 --mark-duration 2',
        explanation: 'When boss reaches 75% HP, marks a random player for 2 seconds then stuns for 3 seconds',
        difficulty: 'basic'
      },
      {
        title: 'Melee Punishment',
        description: 'Stun nearest player to punish melee positioning',
        command: '.bb mechanic-add "Ancient Dracula" "stun" --hp 50 --target nearest --duration 4 --mark-duration 1.5 --announce "Stay back!"',
        explanation: 'Quick warning with longer stun to teach positioning, includes announcement',
        difficulty: 'intermediate'
      },
      {
        title: 'Nuclear Option',
        description: 'Stun all players during critical phase',
        command: '.bb mechanic-add "Ancient Dracula" "stun" --hp 10 --target all --duration 2 --mark-duration 3 --announce "⚡ Prepare for judgment!"',
        explanation: 'Last stand mechanic - longer warning but affects everyone',
        difficulty: 'advanced'
      }
    ],
    playerStrategy: [
      {
        icon: '👁️',
        title: 'Watch for Eye Markers',
        description: 'The floating eye above your head is your warning - use it wisely',
        importance: 'critical'
      },
      {
        icon: '⚡',
        title: 'Use Movement Abilities',
        description: 'Dash or teleport skills can help you escape marked areas',
        importance: 'high'
      },
      {
        icon: '🛡️',
        title: 'Prepare Defensive Cooldowns',
        description: 'Use immunity skills or shields during the warning phase',
        importance: 'medium'
      },
      {
        icon: '👥',
        title: 'Coordinate with Team',
        description: 'Call out when marked so teammates can assist or cover',
        importance: 'medium'
      }
    ],
    adminStrategy: [
      {
        icon: '⚖️',
        title: 'Balance Frequency',
        description: 'Avoid using stun too often - once per phase maximum',
        importance: 'critical'
      },
      {
        icon: '🎯',
        title: 'Target Priority Roles',
        description: 'Consider targeting healers or ranged DPS for maximum impact',
        importance: 'high'
      },
      {
        icon: '⏰',
        title: 'Timing is Everything',
        description: 'Combine with other mechanics for devastating combos',
        importance: 'high'
      },
      {
        icon: '🔄',
        title: 'Provide Counterplay',
        description: 'Ensure players have options to avoid or mitigate the effect',
        importance: 'medium'
      }
    ],
    visualEffects: [
      {
        id: 'stun_marker',
        name: 'Floating Eye Warning',
        description: 'Large floating eye that appears above marked players',
        type: 'mark',
        duration: 2,
        color: '#ff6b6b'
      },
      {
        id: 'immobilize_effect',
        name: 'Immobilization Chains',
        description: 'Visual chains that appear around stunned players',
        type: 'buff',
        duration: 3,
        color: '#4a5568'
      }
    ],
    relationships: [
      {
        mechanicType: 'aoe',
        relationship: 'synergy',
        strength: 'strong',
        description: 'Stun players then hit with AoE while immobilized',
        timing: 'before'
      },
      {
        mechanicType: 'heal',
        relationship: 'synergy',
        strength: 'moderate',
        description: 'Stun interrupts players during boss healing phase',
        timing: 'simultaneous'
      },
      {
        mechanicType: 'fear',
        relationship: 'conflict',
        strength: 'strong',
        description: 'Both are control effects that overlap poorly',
        timing: 'simultaneous'
      }
    ],
    popularity: 8,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'excellent'
  },

  aoe: {
    id: 'aoe',
    name: 'Area of Effect Mechanic',
    category: 'damage',
    complexity: 'advanced',
    description: 'Creates elemental damage zones with various patterns and visual telegraphing',
    longDescription: 'The AoE Mechanic is one of the most versatile tools for creating dynamic encounters. It supports multiple damage types, patterns, and timing configurations with proper telegraphing to give players fair warning.',
    useCases: [
      'Zone control and positioning challenges',
      'Burst damage phases',
      'Punish clustering or specific positions',
      'Create movement requirements',
      'Environmental storytelling through elements'
    ],
    warnings: [
      'Telegraph duration should match player reaction time',
      'Damage falloff prevents one-shots at medium ranges',
      'Consider escape routes when placing multiple AoEs',
      'Different elements have different visual clarity'
    ],
    parameters: [
      {
        key: 'aoe_type',
        label: 'Element Type',
        type: 'select',
        defaultValue: 'fire',
        validation: {
          options: ['fire', 'frost', 'blood', 'holy', 'shadow', 'poison', 'electric'],
          required: true
        },
        description: 'Elemental type affects visuals and damage characteristics',
        tooltip: 'Fire = burst, Frost = slowing, Blood = healing boss, etc.'
      },
      {
        key: 'pattern',
        label: 'AoE Pattern',
        type: 'select',
        defaultValue: 'boss',
        validation: {
          options: ['boss', 'ring', 'random', 'cross', 'line', 'players', 'spiral'],
          required: true
        },
        description: 'Determines how AoE zones are positioned',
        tooltip: 'Boss = centered on boss, Players = targets current positions'
      },
      {
        key: 'radius',
        label: 'Effect Radius',
        type: 'slider',
        defaultValue: '10',
        validation: {
          min: 5,
          max: 50,
          required: true
        },
        description: 'Size of each AoE zone in game units',
        tooltip: 'Larger radius = harder to avoid but more telegraphed'
      },
      {
        key: 'damage',
        label: 'Damage Amount',
        type: 'slider',
        defaultValue: '500',
        validation: {
          min: 0,
          max: 2000,
          required: true
        },
        description: 'Base damage dealt by the AoE effect',
        tooltip: 'Consider player health pools and boss phase'
      }
    ],
    examples: [
      {
        title: 'Fire Nova',
        description: 'Fire explosion centered on boss at 75% HP',
        command: '.bb mechanic-add "Boss" "aoe" --hp 75 --aoe-type fire --pattern boss --radius 15 --damage 800',
        explanation: 'Forces players to move away from boss during damage phase',
        difficulty: 'basic'
      },
      {
        title: 'Frost Ring',
        description: 'Ring of frost zones around the arena',
        command: '.bb mechanic-add "Boss" "aoe" --hp 50 --aoe-type frost --pattern ring --radius 8 --damage 600 --count 8',
        explanation: 'Creates safe zones between frost patches, requires positioning',
        difficulty: 'intermediate'
      }
    ],
    playerStrategy: [
      {
        icon: '⚠️',
        title: 'Watch Telegraph Zones',
        description: 'Red warning areas show where damage will occur',
        importance: 'critical'
      },
      {
        icon: '🏃',
        title: 'Move Early',
        description: 'Start moving as soon as telegraphs appear',
        importance: 'high'
      }
    ],
    adminStrategy: [
      {
        icon: '📏',
        title: 'Size Appropriately',
        description: 'Match AoE size to arena and player count',
        importance: 'high'
      },
      {
        icon: '🎨',
        title: 'Choose Elements Wisely',
        description: 'Different elements have different visual clarity',
        importance: 'medium'
      }
    ],
    visualEffects: [
      {
        id: 'aoe_telegraph',
        name: 'Warning Circle',
        description: 'Red circle showing where damage will occur',
        type: 'area',
        duration: 2
      }
    ],
    relationships: [],
    popularity: 9,
    balanceDifficulty: 7,
    lastUpdated: '2025-01-13',
    documentationQuality: 'good'
  },

  absorb: {
    id: 'absorb',
    name: 'Absorb Mechanic',
    category: 'utility',
    complexity: 'advanced',
    description: 'Drains health or shields from players, with cooperative mechanics',
    longDescription: 'A complex mechanic that can drain player resources while potentially healing the boss. Features cooperative elements where insufficient players in range triggers global punishment.',
    useCases: [
      'Boss self-healing phases',
      'Encourage group coordination',
      'Resource management challenges',
      'Shield breaking mechanics',
      'Cooperative positioning requirements'
    ],
    warnings: [
      'Can create death spirals if too aggressive',
      'Global punishment should be fair but noticeable',
      'Consider non-lethal limits for safety',
      'Balance individual vs group risk'
    ],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 6,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'basic'
  },

  slow: {
    id: 'slow',
    name: 'Slow Mechanic',
    category: 'control',
    complexity: 'intermediate',
    description: 'Reduces player movement speed while draining energy',
    longDescription: 'Creates positioning challenges by slowing players and draining their energy reserves. Features cooperative mechanics requiring minimum player participation.',
    useCases: [
      'Movement-based challenges',
      'Energy management mechanics',
      'Cooperative positioning',
      'Pursuit phases',
      'Escape sequence mechanics'
    ],
    warnings: [
      'Can feel unfair if too restrictive',
      'Energy drain should be balanced with regeneration',
      'Provide clear visual feedback',
      'Consider mobility skill interactions'
    ],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 5,
    balanceDifficulty: 7,
    lastUpdated: '2025-01-13',
    documentationQuality: 'basic'
  },

  // Additional Control Mechanics
  fear: {
    id: 'fear',
    name: 'Fear Mechanic',
    category: 'control',
    complexity: 'basic',
    description: 'Causes players to flee uncontrollably in random directions',
    longDescription: 'Fear mechanics create panic and chaos by forcing players to move erratically, disrupting coordinated strategies and positioning.',
    useCases: ['Break up player formations', 'Create chaos during critical moments', 'Punish grouping', 'Area denial'],
    warnings: ['Can cause players to run into hazards', 'Duration should be short', 'Provide immunity periods'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 6,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  root: {
    id: 'root',
    name: 'Root Mechanic',
    category: 'control',
    complexity: 'basic',
    description: 'Immobilizes players while allowing them to use abilities',
    longDescription: 'Root effects prevent movement but maintain combat functionality, creating positioning challenges without complete helplessness.',
    useCases: ['Positional punishment', 'Force ability usage', 'Create vulnerability windows', 'Area control'],
    warnings: ['Combine with escapable mechanics', 'Shorter duration than stun', 'Avoid with heavy AoE'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 7,
    balanceDifficulty: 4,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  silence: {
    id: 'silence',
    name: 'Silence Mechanic',
    category: 'control',
    complexity: 'intermediate',
    description: 'Prevents players from using abilities while maintaining movement',
    longDescription: 'Silence creates tactical disadvantages by removing ability usage while preserving positioning options.',
    useCases: ['Counter ability spam', 'Force basic attacks', 'Tactical disadvantage', 'Interrupt casting'],
    warnings: ['Can feel powerless', 'Provide visual clarity', 'Short duration recommended'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 5,
    balanceDifficulty: 7,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  mindcontrol: {
    id: 'mindcontrol',
    name: 'Mind Control Mechanic',
    category: 'control',
    complexity: 'advanced',
    description: 'Temporarily controls player actions and targeting',
    longDescription: 'Advanced control mechanic that forces players to attack allies or perform unwanted actions.',
    useCases: ['Ultimate disruption', 'Turn players against each other', 'Advanced encounters', 'Psychological pressure'],
    warnings: ['Extremely frustrating if overused', 'Very short duration', 'Clear visual indicators needed'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 3,
    balanceDifficulty: 9,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Damage Mechanics
  dot: {
    id: 'dot',
    name: 'Damage Over Time Mechanic',
    category: 'damage',
    complexity: 'intermediate',
    description: 'Applies persistent damage effects with various elemental types',
    longDescription: 'DoT effects create sustained pressure and resource management challenges through poison, burn, bleed, corruption, or frost damage.',
    useCases: ['Sustained pressure', 'Resource drain', 'Stacking mechanics', 'Elemental themes', 'Anti-healing'],
    warnings: ['Stack limits prevent death spirals', 'Cleansing should be available', 'Visual clarity important'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 8,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  knockback: {
    id: 'knockback',
    name: 'Knockback Mechanic',
    category: 'damage',
    complexity: 'basic',
    description: 'Pushes players away from the source with optional damage',
    longDescription: 'Forceful displacement that can reposition players, potentially into hazards or away from objectives.',
    useCases: ['Positioning reset', 'Environmental hazards', 'Interrupt channels', 'Create distance'],
    warnings: ['Check for environmental hazards', 'Predictable direction helps', 'Can be disorienting'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 7,
    balanceDifficulty: 5,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  weaken: {
    id: 'weaken',
    name: 'Weaken Mechanic',
    category: 'damage',
    complexity: 'intermediate',
    description: 'Reduces player damage output or defensive capabilities',
    longDescription: 'Debuffs that reduce player effectiveness in combat through damage reduction, defense lowering, or stat penalties.',
    useCases: ['Reduce player effectiveness', 'Create vulnerability phases', 'Force tactical changes', 'Scaling difficulty'],
    warnings: ['Clear visual feedback needed', 'Avoid stacking too heavily', 'Provide counterplay options'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 6,
    balanceDifficulty: 7,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Absorption/Transfer Mechanics
  buffsteal: {
    id: 'buffsteal',
    name: 'Buff Steal Mechanic',
    category: 'utility',
    complexity: 'advanced',
    description: 'Removes beneficial effects from players and applies them to the boss',
    longDescription: 'Sophisticated mechanic that transfers player advantages to the boss, creating dynamic power shifts.',
    useCases: ['Power reversal', 'Punish buff stacking', 'Dynamic encounters', 'Strategic depth'],
    warnings: ['Can completely swing fights', 'Visual clarity essential', 'Limit stolen buff duration'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 4,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  reflect: {
    id: 'reflect',
    name: 'Reflect Mechanic',
    category: 'defensive',
    complexity: 'advanced',
    description: 'Returns a percentage of damage back to attackers',
    longDescription: 'Defensive mechanic that punishes aggressive players by reflecting their damage back at them.',
    useCases: ['Punish burst damage', 'Defensive phases', 'Risk/reward mechanics', 'Self-damage prevention'],
    warnings: ['Can cause instant deaths', 'Clear visual indicators needed', 'Percentage-based works better'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 5,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Battlefield Mechanics
  trap: {
    id: 'trap',
    name: 'Trap Mechanic',
    category: 'utility',
    complexity: 'intermediate',
    description: 'Places environmental hazards that trigger when players enter',
    longDescription: 'Environmental control through spike, fire, ice, poison, or explosive traps with various placement patterns.',
    useCases: ['Area denial', 'Movement restriction', 'Environmental pressure', 'Positioning challenges'],
    warnings: ['Visual warnings important', 'Activation delay for fairness', 'Limit trap density'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 7,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  vision: {
    id: 'vision',
    name: 'Vision Mechanic',
    category: 'utility',
    complexity: 'advanced',
    description: 'Manipulates player visibility and sight range',
    longDescription: 'Advanced mechanic that affects what players can see, creating disorientation and tactical disadvantages.',
    useCases: ['Disorientation', 'Hide other mechanics', 'Atmospheric effects', 'Advanced encounters'],
    warnings: ['Can cause motion sickness', 'Accessibility concerns', 'Clear duration indicators'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 3,
    balanceDifficulty: 9,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  dispel: {
    id: 'dispel',
    name: 'Dispel Mechanic',
    category: 'utility',
    complexity: 'intermediate',
    description: 'Removes beneficial or harmful effects from players',
    longDescription: 'Utility mechanic that can remove buffs from players or debuffs as a beneficial effect.',
    useCases: ['Remove player advantages', 'Cleanse as reward', 'Reset fight state', 'Counter strategies'],
    warnings: ['Can feel punishing', 'Clear visual feedback', 'Consider what gets dispelled'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 5,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Boss Enhancement Mechanics
  heal: {
    id: 'heal',
    name: 'Heal Mechanic',
    category: 'support',
    complexity: 'basic',
    description: 'Restores boss health through various healing types',
    longDescription: 'Boss self-preservation through instant heals, channeled healing, or heal-over-time effects.',
    useCases: ['Extend encounter length', 'Punish low DPS', 'Create interruption mechanics', 'Phase transitions'],
    warnings: ['Can make fights tedious', 'Provide interruption methods', 'Balance with player damage'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 8,
    balanceDifficulty: 5,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  phase: {
    id: 'phase',
    name: 'Phase Mechanic',
    category: 'utility',
    complexity: 'advanced',
    description: 'Triggers major encounter changes at specific health thresholds',
    longDescription: 'Dramatic encounter shifts that change boss behavior, arena layout, or available mechanics.',
    useCases: ['Encounter progression', 'Prevent predictability', 'Scaling difficulty', 'Narrative moments'],
    warnings: ['Can reset player progress feeling', 'Clear transition indicators', 'Balanced phase difficulty'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 9,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  pull: {
    id: 'pull',
    name: 'Pull Mechanic',
    category: 'utility',
    complexity: 'basic',
    description: 'Forcibly draws players toward the boss or specific location',
    longDescription: 'Forced movement that brings players closer, often used to set up other mechanics or reset positioning.',
    useCases: ['Reset positioning', 'Setup other mechanics', 'Prevent kiting', 'Grouping players'],
    warnings: ['Telegraphing important', 'Avoid pulling into instant death', 'Consider escape options'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 7,
    balanceDifficulty: 4,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Special Mechanics
  clone: {
    id: 'clone',
    name: 'Clone Mechanic',
    category: 'utility',
    complexity: 'advanced',
    description: 'Creates copies of the boss or players with modified stats',
    longDescription: 'Advanced summoning that creates identical copies with reduced power, adding complexity and chaos.',
    useCases: ['Multiply threats', 'Confusion tactics', 'Split damage requirements', 'Advanced encounters'],
    warnings: ['Visual distinction needed', 'Reduced health for clones', 'Limit simultaneous clones'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 4,
    balanceDifficulty: 9,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  curse: {
    id: 'curse',
    name: 'Curse Mechanic',
    category: 'damage',
    complexity: 'advanced',
    description: 'Applies complex debuffs with multiple negative effects',
    longDescription: 'Sophisticated debuff system that combines multiple negative effects into a single powerful curse.',
    useCases: ['Powerful debuffs', 'Multi-effect penalties', 'Cleansing challenges', 'High-level encounters'],
    warnings: ['Can be overwhelming', 'Clear effect descriptions', 'Reasonable cleansing options'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 4,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  // Boss Enhancement Mechanics (continued)
  enrage: {
    id: 'enrage',
    name: 'Enrage Mechanic',
    category: 'support',
    complexity: 'intermediate',
    description: 'Increases boss damage and speed when triggered by low health or time pressure',
    longDescription: 'Escalation mechanic that makes the boss more dangerous as the fight progresses, creating urgency and escalating difficulty.',
    useCases: ['Prevent endless fights', 'Create urgency', 'Escalating difficulty', 'Time pressure', 'Dramatic final phases'],
    warnings: ['Can make fights unwinnable', 'Should have clear visual indicators', 'Balance stacking effects carefully'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 8,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  shield: {
    id: 'shield',
    name: 'Shield Mechanic',
    category: 'defensive',
    complexity: 'intermediate',
    description: 'Grants temporary damage absorption barriers to the boss',
    longDescription: 'Defensive mechanic that provides temporary protection through various shield types with different absorption amounts and durations.',
    useCases: ['Defensive phases', 'Damage reduction windows', 'Burst protection', 'Phase transitions', 'Challenge escalation'],
    warnings: ['Can make fights tedious', 'Should be breakable', 'Clear visual feedback needed', 'Time limits recommended'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 7,
    balanceDifficulty: 6,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  },

  summon: {
    id: 'summon',
    name: 'Summon Mechanic',
    category: 'support',
    complexity: 'advanced',
    description: 'Spawns additional enemies or allies to assist the boss in combat',
    longDescription: 'Complex mechanic that introduces additional threats through minions, adds, or duplicates with various AI behaviors and stats.',
    useCases: ['Add complexity', 'Split player attention', 'Create AoE targets', 'Phase transitions', 'Overwhelm players'],
    warnings: ['Can overcrowd fights', 'Limit simultaneous summons', 'Clear summon indicators', 'Balance summon health'],
    parameters: [],
    examples: [],
    playerStrategy: [],
    adminStrategy: [],
    visualEffects: [],
    relationships: [],
    popularity: 9,
    balanceDifficulty: 8,
    lastUpdated: '2025-01-13',
    documentationQuality: 'incomplete'
  }
}
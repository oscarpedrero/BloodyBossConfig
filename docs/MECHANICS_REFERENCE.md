# BloodyBoss Mechanics Reference

This document contains a comprehensive list of all available boss mechanics in the BloodyBoss mod v2.1.0, including all their parameters and sub-type variations.

## Table of Contents

1. [AbsorbMechanic](#absorbmechanic)
2. [AoeMechanic](#aoemechanic)
3. [BuffStealMechanic](#buffstealmechanic)
4. [CloneMechanic](#clonemechanic)
5. [CurseMechanic](#cursemechanic)
6. [DispelMechanic](#dispelmechanic)
7. [DotMechanic](#dotmechanic)
8. [EnrageMechanic](#enragemechanic)
9. [FearMechanic](#fearmechanic)
10. [HealMechanic](#healmechanic)
11. [KnockbackMechanic](#knockbackmechanic)
12. [MindControlMechanic](#mindcontrolmechanic)
13. [PhaseMechanic](#phasemechanic)
14. [PullMechanic](#pullmechanic)
15. [ReflectMechanic](#reflectmechanic)
16. [RootMechanic](#rootmechanic)
17. [ShieldMechanic](#shieldmechanic)
18. [SilenceMechanic](#silencemechanic)
19. [SlowMechanic](#slowmechanic)
20. [StunMechanic](#stunmechanic)
21. [SummonMechanic](#summonmechanic)
22. [TrapMechanic](#trapmechanic)
23. [VisionMechanic](#visionmechanic)
24. [WeakenMechanic](#weakenmechanic)

---

## AbsorbMechanic

**Type:** `absorb`  
**Description:** Drains health or shields from players

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `absorb_type` | string | "health" | Type of absorption: "health", "shield", "all" |
| `amount` | float | 20f | Amount to absorb per target |
| `radius` | float | 20f | Effect radius |
| `duration` | float | 5f | Duration for continuous absorption |
| `continuous` | bool | false | Whether to apply continuous absorption over time |
| `announcement` | string | "Life force drains away!" | Message to display |
| `min_players` | int | 0 | Minimum players required in range (cooperative mechanic) |
| `global_radius` | float | 50f | Radius for global punishment if min_players not met |
| `global_multiplier` | float | 1.5f | Damage multiplier for global punishment |

### Absorb Types

- **health**: Drains health from players and heals the boss
- **shield**: Removes shield buffs from players and applies shield to boss
- **all**: Combines health (70%) and shield (30%) absorption

---

## AoeMechanic

**Type:** `aoe`  
**Description:** Creates telegraphed area damage zones with various patterns

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `aoe_type` | string | "fire" | Damage type: "fire", "frost", "blood", "holy", "shadow", "poison", "electric" |
| `radius` | float | 10f | Radius of each AoE zone |
| `damage` | float | 50f | Base damage amount |
| `count` | int | 1 | Number of AoE zones to create |
| `pattern` | string | "boss" | Pattern: "boss", "ring", "random", "cross", "line", "players", "spiral" |
| `delay` | float | 2f | Delay before damage is applied |
| `telegraph_duration` | float | 1.8f | Duration of warning indicator |
| `persist_duration` | float | 0f | How long the AoE persists (0 = instant) |
| `tick_rate` | float | 0.5f | Damage tick rate for persistent AoEs |
| `announcement` | string | "Area attack incoming!" | Message to display |
| `target_players` | bool | false | Whether to target player positions directly |

### AoE Types & Visual Effects

- **fire**: Red fire damage with ignite effect
- **frost**: Blue frost damage with freeze effect
- **blood**: Blood magic damage
- **holy**: Yellow holy damage
- **shadow**: Shadow damage with bat swarm effect
- **poison**: Green poison damage with sludge effect
- **electric**: Lightning damage with electric shield effect

### Patterns

- **boss/center**: Single AoE at boss position
- **ring**: Circular pattern around boss
- **random**: Random positions within radius
- **cross**: Cross pattern centered on boss
- **line**: Linear pattern
- **players**: Targets player positions
- **spiral**: Spiral pattern outward from boss

---

## BuffStealMechanic

**Type:** `buff_steal`  
**Description:** Steals buffs from players and applies them to the boss

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | string | "random" | Target selection: "random", "all" |
| `max_steals` | int | 3 | Maximum number of buffs to steal |
| `steal_from_all` | bool | false | Whether to steal from all players |
| `apply_debuff` | bool | true | Apply weakness debuff to affected players |
| `announcement` | string | "🎭 The boss steals your power!" | Message to display |

---

## CloneMechanic

**Type:** `clone`  
**Description:** Creates copies of the boss

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `count` | int | 2 | Number of clones to create |
| `health_percent` | float | 25f | Clone health as percentage of boss health |
| `damage_percent` | float | 50f | Clone damage as percentage of boss damage |
| `duration` | float | 30f | Clone lifetime in seconds |
| `share_health` | bool | false | Whether clones share health with boss |
| `announcement` | string | "👥 The boss splits into multiple forms!" | Message to display |

---

## CurseMechanic

**Type:** `curse`  
**Description:** Applies various powerful curses to players

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `curse_type` | string | "random" | Curse type: "doom", "weakness", "silence", "slow", "random" |
| `target` | string | "all" | Target selection: "all", "random", "closest" |
| `duration` | float | 15f | Curse duration |
| `spreadable` | bool | false | Whether curse can spread between players |
| `spread_radius` | float | 10f | Radius for curse spreading |
| `stack_limit` | int | 3 | Maximum curse stacks |
| `announcement` | string | "☠️ Ancient curse takes hold!" | Message to display |

### Curse Types

- **doom**: Damage over time that increases
- **weakness**: Reduces all resistances
- **silence**: Prevents ability usage
- **slow**: Movement and attack speed reduction
- **random**: Randomly selects from available curses

---

## DispelMechanic

**Type:** `dispel`  
**Description:** Removes buffs from players or debuffs from boss

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `dispel_type` | string | "all" | What to dispel: "magic", "physical", "defensive", "all" |
| `target` | string | "all_players" | Target: "all_players", "self_only" |
| `radius` | float | 25f | Effect radius |
| `max_dispels` | int | 5 | Maximum buffs to remove per target |
| `self_cleanse` | bool | true | Whether boss cleanses own debuffs |
| `announcement` | string | "✨ Magic is stripped away!" | Message to display |

---

## DotMechanic

**Type:** `dot`  
**Description:** Applies damage over time effects

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `dot_type` | string | "poison" | DoT type: "poison", "burn", "bleed", "corruption", "frost" |
| `damage_per_second` | float | 20f | Damage per second |
| `duration` | float | 10f | Effect duration |
| `target` | string | "all" | Target selection: "all", "random" |
| `radius` | float | 20f | Effect radius |
| `stackable` | bool | false | Whether effect can stack |
| `announcement` | string | "☠️ Deadly affliction spreads!" | Message to display |

---

## EnrageMechanic

**Type:** `enrage`  
**Description:** Increases boss damage, movement speed, attack speed, and reduces cooldowns

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `damage_multiplier` | float | 1.5f | Damage increase multiplier |
| `movement_speed_multiplier` | float | 1.0f | Movement speed multiplier |
| `attack_speed_multiplier` | float | 1.0f | Attack speed multiplier |
| `cast_speed_multiplier` | float | 1.0f | Cast speed multiplier |
| `cooldown_reduction` | float | 0f | Cooldown reduction percentage |
| `duration` | float | 0f | Duration (0 = permanent) |
| `visual_effect` | string | "blood_rage" | Visual effect: "blood_rage", "fire_aura", "speed_lines" |
| `announcement` | string | "⚔️ The boss enters a blood rage!" | Message to display |

---

## FearMechanic

**Type:** `fear`  
**Description:** Causes players to flee in terror

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | string | "all" | Target selection: "all", "random" |
| `duration` | float | 3f | Fear duration |
| `radius` | float | 20f | Effect radius |
| `max_targets` | int | 5 | Maximum targets |
| `announcement` | string | "😱 Terror strikes!" | Message to display |

---

## HealMechanic

**Type:** `heal`  
**Description:** Heals the boss by a fixed amount or percentage of max health

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `heal_amount` | string | "20%" | Heal amount (number or percentage) |
| `heal_type` | string | "instant" | Heal type: "instant", "channel", "overtime" |
| `duration` | float | 0f | Duration for channel/overtime heals |
| `interruptible` | bool | true | Whether channeled heal can be interrupted |
| `visual_effect` | string | "heal_glow" | Visual: "heal_glow", "holy_heal", "blood_heal", "nature_heal" |
| `announcement` | string | "💚 The boss begins to heal!" | Message to display |

---

## KnockbackMechanic

**Type:** `knockback`  
**Description:** Pushes players away from the boss

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `radius` | float | 15f | Effect radius |
| `force` | float | 25f | Knockback force |
| `upward_force` | float | 5f | Upward component of knockback |
| `damage` | float | 0f | Damage dealt on knockback |
| `announcement` | string | "💥 Explosive force!" | Message to display |

---

## MindControlMechanic

**Type:** `mind_control`  
**Description:** Takes control of a player's mind

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | string | "random" | Target: "random", "highest_health", "lowest_health", "farthest" |
| `duration` | float | 5f | Control duration |
| `force_attack_allies` | bool | true | Forces controlled player to attack allies |
| `increase_speed` | bool | true | Increases controlled player's speed |
| `announcement` | string | "🧠 Your mind belongs to me!" | Message to display |

---

## PhaseMechanic

**Type:** `phase`  
**Description:** Transitions the boss to a new combat phase

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `phase_name` | string | "Phase 2" | Name of the phase |
| `announcement` | string | "⚔️ Boss enters {phase_name}!" | Message to display |
| `clear_debuffs` | bool | true | Remove debuffs from boss |
| `heal_percent` | float | 0f | Heal boss by percentage |
| `apply_buff` | int | 0 | Buff GUID to apply (0 = none) |

---

## PullMechanic

**Type:** `pull`  
**Description:** Pulls all players towards the boss

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `radius` | float | 30f | Effect radius |
| `force` | float | 20f | Pull force |
| `stun` | bool | true | Apply stun after pull |
| `stun_duration` | float | 1f | Stun duration |
| `announcement` | string | "🌪️ Get over here!" | Message to display |

---

## ReflectMechanic

**Type:** `reflect`  
**Description:** Reflects damage back to attackers

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `reflect_type` | string | "all" | Type: "physical", "spell", "projectile", "all" |
| `reflect_percent` | float | 100f | Percentage of damage reflected |
| `duration` | float | 8f | Effect duration |
| `max_reflects` | int | 0 | Maximum reflects (0 = unlimited) |
| `visual_effect` | string | "mirror_shield" | Visual: "mirror_shield", "holy_barrier", "arcane_shield" |
| `announcement` | string | "🪞 Attacks will be reflected!" | Message to display |

---

## RootMechanic

**Type:** `root`  
**Description:** Immobilizes players in place

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | string | "random" | Target: "all", "random", "farthest", "nearest" |
| `duration` | float | 3f | Root duration |
| `damage_per_second` | float | 10f | DoT damage while rooted |
| `max_targets` | int | 3 | Maximum targets |
| `visual_effect` | string | "vines" | Visual: "vines", "ice", "chains" |
| `announcement` | string | "🌿 Roots entangle the ground!" | Message to display |

---

## ShieldMechanic

**Type:** `shield`  
**Description:** Applies various types of shields to protect the boss from damage

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `shield_type` | string | "immune" | Type: "immune", "absorb", "reflect" |
| `shield_amount` | float | 10000f | Shield strength (for absorb type) |
| `duration` | float | 10f | Shield duration |
| `can_move` | bool | false | Whether boss can move while shielded |
| `visual_effect` | string | "holy_shield" | Visual effect name |
| `announcement` | string | "🛡️ A divine shield protects the boss!" | Message to display |

---

## SilenceMechanic

**Type:** `silence`  
**Description:** Prevents players from casting spells

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `radius` | float | 20f | Effect radius |
| `duration` | float | 4f | Silence duration |
| `disable_items` | bool | true | Also disable consumable items |
| `announcement` | string | "🔇 Silence falls upon the battlefield!" | Message to display |

---

## SlowMechanic

**Type:** `slow`  
**Description:** Slows players - energy theft mechanic

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `radius` | float | 15f | Effect radius |
| `announcement` | string | "Time slows down!" | Message to display |
| `min_players` | int | 0 | Minimum players required in range |
| `global_radius` | float | 50f | Radius for global slow if min_players not met |

---

## StunMechanic

**Type:** `stun`  
**Description:** Marks players with a psychic eye before stunning them

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | string | "nearest" | Target: "all", "nearest", "farthest", "random" |
| `duration` | float | 3f | Stun duration |
| `mark_duration` | float | 2.5f | Warning mark duration before stun |
| `radius` | float | 0f | Effect radius (0 = single target) |
| `max_targets` | int | 1 | Maximum targets |
| `announcement` | string | "The boss's psychic gaze locks onto its target!" | Message to display |
| `flash_before_stun` | bool | true | Flash effect before applying stun |
| `can_be_cleansed` | bool | true | Whether stun can be cleansed |
| `mark_effect` | string | "auto" | Mark effect type or GUID |

---

## SummonMechanic

**Type:** `summon`  
**Description:** Summons allied NPCs to assist the boss in combat

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `add_prefab` | int | -1905691330 | Prefab GUID of unit to summon (default: Alpha Wolf) |
| `count` | int | 3 | Number of units to summon |
| `pattern` | string | "circle" | Spawn pattern: "circle", "line", "random" |
| `despawn_on_boss_death` | bool | true | Remove summons when boss dies |
| `announcement` | string | "⚔️ Minions answer the call!" | Message to display |

---

## TrapMechanic

**Type:** `trap`  
**Description:** Creates dangerous traps around the arena

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `trap_type` | string | "spike" | Type: "spike", "fire", "ice", "poison", "explosive" |
| `pattern` | string | "random" | Pattern: "random", "circle", "spiral", "grid" |
| `count` | int | 5 | Number of traps |
| `damage` | float | 50f | Trap damage |
| `radius` | float | 30f | Spawn radius |
| `trigger_delay` | float | 1.5f | Delay before trap activates |
| `announcement` | string | "Watch your step!" | Message to display |

---

## VisionMechanic

**Type:** `vision`  
**Description:** Impairs player vision with various effects

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `vision_type` | string | "darkness" | Type: "darkness", "blur", "hallucination", "fog" |
| `radius` | float | 30f | Effect radius |
| `duration` | float | 10f | Effect duration |
| `intensity` | float | 80f | Effect intensity (0-100) |
| `announcement` | string | "👁️ Your vision betrays you!" | Message to display |

---

## WeakenMechanic

**Type:** `weaken`  
**Description:** Weakens player stats and abilities

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `weaken_type` | string | "all" | Type: "physical", "spell", "defense", "healing", "all" |
| `amount` | float | 30f | Weakening percentage |
| `radius` | float | 25f | Effect radius |
| `duration` | float | 8f | Effect duration |
| `stackable` | bool | false | Whether effect can stack |
| `announcement` | string | "💀 Your strength abandons you!" | Message to display |

---

## Usage Example

```json
{
  "id": "example-mechanic",
  "type": "aoe",
  "enabled": true,
  "trigger": {
    "type": "health_threshold",
    "value": 50
  },
  "parameters": {
    "aoe_type": "fire",
    "radius": 15,
    "damage": 100,
    "count": 3,
    "pattern": "ring",
    "delay": 2.5,
    "announcement": "The ground erupts in flames!"
  }
}
```

## Notes

- All mechanics validate their parameters before execution
- Most visual effects are achieved through existing V Rising buff prefabs
- Cooperative mechanics (min_players) add strategic depth by punishing groups that don't coordinate
- Telegraph durations give players time to react to incoming mechanics
- Announcement messages support V Rising's color formatting (e.g., `FontColorChatSystem.Yellow()`)
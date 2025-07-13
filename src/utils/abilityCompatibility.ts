// Lógica de compatibilidad de habilidades basada en BloodyBoss C#
import { VBLOOD_DATABASE } from '../data/vbloodDatabase'

export enum CompatibilityLevel {
  Perfect = 'perfect',
  Good = 'good', 
  Warning = 'warning',
  Incompatible = 'incompatible'
}

export enum AbilityCategory {
  Unknown = 'unknown',
  BasicAttack = 'basic_attack',
  Special = 'special',
  Movement = 'movement',
  Defensive = 'defensive',
  Ultimate = 'ultimate',
  Transformation = 'transformation',
  Summon = 'summon',
  Buff = 'buff'
}

export enum CreatureType {
  Humanoid = 'humanoid',
  Beast = 'beast', 
  Undead = 'undead',
  Demon = 'demon',
  Mechanical = 'mechanical',
  Spirit = 'spirit'
}

export interface CompatibilityResult {
  level: CompatibilityLevel
  warnings: string[]
  reasons: string[]
}

// Mapeo de PrefabGUIDs a tipos de criatura (basado en análisis del mod)
const CREATURE_TYPE_MAP: Record<string, CreatureType> = {
  // Humanoid VBloods
  '1896428751': CreatureType.Humanoid, // Bandit Bomber
  '763273073': CreatureType.Humanoid,  // Chaos Arrow
  '-327335305': CreatureType.Humanoid, // Dracula
  '1106149033': CreatureType.Humanoid, // Vincent the Frostbringer
  
  // Beast VBloods  
  '-484891467': CreatureType.Beast, // Alpha Wolf
  '1112948824': CreatureType.Beast, // Ferocious Bear
  '1358993138': CreatureType.Beast, // Putrid Rat
  
  // Undead VBloods
  '939467639': CreatureType.Undead,  // Bishop of Shadows
  '1449631170': CreatureType.Undead, // Undead Commander
  
  // Demon VBloods
  '-1347412392': CreatureType.Demon, // Solarus the Immaculate
  
  // Mechanical/Golem VBloods
  '-1905691330': CreatureType.Mechanical, // Gorecrusher the Behemoth
}

// VBloods que requieren vuelo
const FLIGHT_REQUIRED_VBLOODS = new Set([
  '-327335305', // Dracula (forma de murciélago)
])

// VBloods que no pueden volar
const NO_FLIGHT_VBLOODS = new Set([
  '-1905691330', // Gorecrusher (demasiado pesado)
])

// Análisis de compatibilidad de habilidades
function analyzeAbilityInfo(vblood: any, abilitySlot: number) {
  const ability = vblood.abilities[abilitySlot]
  if (!ability) return null
  
  const category = categorizeAbility(ability.category)
  const requiresFlight = ability.category.toLowerCase().includes('flight') || 
                        ability.category.toLowerCase().includes('aerial')
  
  return {
    category,
    requiresFlight,
    isChanneled: ability.category.toLowerCase().includes('channeled'),
    canMoveWhileCasting: !ability.category.toLowerCase().includes('channeled'),
    castTime: ability.category.toLowerCase().includes('instant') ? 0 : 
             ability.category.toLowerCase().includes('channeled') ? 3 : 1
  }
}

function categorizeAbility(categoryStr: string): AbilityCategory {
  const lower = categoryStr.toLowerCase()
  
  if (lower.includes('melee') || lower.includes('slash') || lower.includes('strike')) {
    return AbilityCategory.BasicAttack
  }
  if (lower.includes('projectile') || lower.includes('spell') || lower.includes('magic')) {
    return AbilityCategory.Special
  }
  if (lower.includes('dash') || lower.includes('teleport') || lower.includes('movement')) {
    return AbilityCategory.Movement
  }
  if (lower.includes('shield') || lower.includes('defense') || lower.includes('barrier')) {
    return AbilityCategory.Defensive
  }
  if (lower.includes('ultimate') || lower.includes('super')) {
    return AbilityCategory.Ultimate
  }
  if (lower.includes('transform') || lower.includes('form')) {
    return AbilityCategory.Transformation
  }
  if (lower.includes('summon') || lower.includes('spawn') || lower.includes('minion')) {
    return AbilityCategory.Summon
  }
  if (lower.includes('buff') || lower.includes('enhance') || lower.includes('boost')) {
    return AbilityCategory.Buff
  }
  
  return AbilityCategory.Unknown
}

function getCreatureType(prefabGuid: number): CreatureType {
  return CREATURE_TYPE_MAP[prefabGuid.toString()] || CreatureType.Humanoid
}

export function checkAbilityCompatibility(
  bossPrefabGuid: number, 
  sourceAbilityPrefabGuid: number, 
  targetSlot: number
): CompatibilityResult {
  const warnings: string[] = []
  const reasons: string[] = []
  
  const bossVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === bossPrefabGuid)
  const sourceVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === sourceAbilityPrefabGuid)
  
  if (!bossVBlood || !sourceVBlood) {
    return {
      level: CompatibilityLevel.Incompatible,
      warnings: ['VBlood data not found'],
      reasons: []
    }
  }
  
  const bossType = getCreatureType(bossPrefabGuid)
  const sourceType = getCreatureType(sourceAbilityPrefabGuid)
  
  const sourceAbility = sourceVBlood.abilities.find((a: any) => a.slot === targetSlot)
  if (!sourceAbility) {
    return {
      level: CompatibilityLevel.Incompatible,
      warnings: ['Source ability not found'],
      reasons: []
    }
  }
  
  const abilityInfo = analyzeAbilityInfo(sourceVBlood, targetSlot)
  if (!abilityInfo) {
    return {
      level: CompatibilityLevel.Warning,
      warnings: ['Unable to analyze ability'],
      reasons: []
    }
  }
  
  let compatibilityLevel = CompatibilityLevel.Perfect
  
  // Verificar requisitos de vuelo
  if (abilityInfo.requiresFlight && NO_FLIGHT_VBLOODS.has(bossPrefabGuid.toString())) {
    compatibilityLevel = CompatibilityLevel.Incompatible
    warnings.push('This ability requires flight but the boss cannot fly')
    return { level: compatibilityLevel, warnings, reasons }
  }
  
  if (!abilityInfo.requiresFlight && FLIGHT_REQUIRED_VBLOODS.has(bossPrefabGuid.toString())) {
    compatibilityLevel = CompatibilityLevel.Warning
    warnings.push('Boss has flight capabilities but ability does not use them')
  }
  
  // Verificar compatibilidad de tipo de criatura
  if (bossType !== sourceType) {
    if (bossType === CreatureType.Mechanical && sourceType === CreatureType.Humanoid) {
      compatibilityLevel = CompatibilityLevel.Good
      reasons.push('Mechanical boss with humanoid ability - generally compatible')
    } else if (bossType === CreatureType.Beast && sourceType === CreatureType.Humanoid) {
      compatibilityLevel = CompatibilityLevel.Warning
      warnings.push('Beast using humanoid abilities may look awkward')
    } else if (bossType === CreatureType.Undead && sourceType === CreatureType.Demon) {
      compatibilityLevel = CompatibilityLevel.Good
      reasons.push('Undead-Demon combination - thematically compatible')
    } else {
      if (compatibilityLevel === CompatibilityLevel.Perfect) {
        compatibilityLevel = CompatibilityLevel.Good
      }
      warnings.push(`Different creature types: ${bossType} boss using ${sourceType} ability`)
    }
  } else {
    reasons.push('Same creature type - perfect compatibility')
  }
  
  // Verificar habilidades canalizadas en jefes menores
  if (abilityInfo.isChanneled && bossVBlood.level < 50) {
    compatibilityLevel = CompatibilityLevel.Warning
    warnings.push('Channeled abilities on low-level bosses may be easily interrupted')
  }
  
  // Verificar habilidades de transformación específicas
  if (abilityInfo.category === AbilityCategory.Transformation) {
    if (bossType !== sourceType) {
      compatibilityLevel = CompatibilityLevel.Warning
      warnings.push('Transformation abilities work best with same creature type')
    }
  }
  
  return { level: compatibilityLevel, warnings, reasons }
}

export function getCompatibleAbilities(
  bossPrefabGuid: number, 
  targetSlot: number,
  filterCategory?: AbilityCategory
): Array<{
  sourcePrefabGuid: number
  sourceVBloodName: string
  abilityGuid: number
  compatibility: CompatibilityResult
  description: string
}> {
  const results: Array<{
    sourcePrefabGuid: number
    sourceVBloodName: string  
    abilityGuid: number
    compatibility: CompatibilityResult
    description: string
  }> = []
  
  VBLOOD_DATABASE.forEach((vblood: any) => {
    const targetAbility = vblood.abilities.find((a: any) => a.slot === targetSlot)
    if (!targetAbility) return
    
    const abilityInfo = analyzeAbilityInfo(vblood, targetSlot)
    if (!abilityInfo) return
    
    // Filtrar por categoría si se especifica
    if (filterCategory && abilityInfo.category !== filterCategory) return
    
    const compatibility = checkAbilityCompatibility(bossPrefabGuid, vblood.prefabGuid, targetSlot)
    
    // Solo incluir habilidades compatibles o con advertencias menores
    if (compatibility.level !== CompatibilityLevel.Incompatible) {
      results.push({
        sourcePrefabGuid: vblood.prefabGuid,
        sourceVBloodName: vblood.name,
        abilityGuid: targetAbility.guid,
        compatibility,
        description: `${targetAbility.category} ability from ${vblood.name}`
      })
    }
  })
  
  // Ordenar por nivel de compatibilidad
  const compatibilityOrder = {
    [CompatibilityLevel.Perfect]: 0,
    [CompatibilityLevel.Good]: 1,
    [CompatibilityLevel.Warning]: 2,
    [CompatibilityLevel.Incompatible]: 3
  }
  
  return results.sort((a, b) => 
    compatibilityOrder[a.compatibility.level] - compatibilityOrder[b.compatibility.level]
  )
}

export function getRandomCompatibleAbility(bossPrefabGuid: number, targetSlot: number) {
  const compatibleAbilities = getCompatibleAbilities(bossPrefabGuid, targetSlot)
  
  // Filtrar solo Perfect y Good
  const goodAbilities = compatibleAbilities.filter(a => 
    a.compatibility.level === CompatibilityLevel.Perfect || 
    a.compatibility.level === CompatibilityLevel.Good
  )
  
  if (goodAbilities.length === 0) {
    // Si no hay buenas, usar todas las compatibles
    return compatibleAbilities.length > 0 ? 
      compatibleAbilities[Math.floor(Math.random() * compatibleAbilities.length)] : null
  }
  
  return goodAbilities[Math.floor(Math.random() * goodAbilities.length)]
}

export function autoConfigureAllSlots(bossPrefabGuid: number): Record<string, any> {
  const bossVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === bossPrefabGuid)
  if (!bossVBlood) return {}
  
  const autoConfig: Record<string, any> = {}
  
  bossVBlood.abilities.forEach((ability: any, index: number) => {
    const randomAbility = getRandomCompatibleAbility(bossPrefabGuid, ability.slot)
    
    if (randomAbility) {
      autoConfig[index.toString()] = {
        AbilityGUID: randomAbility.abilityGuid,
        SourcePrefabGUID: randomAbility.sourcePrefabGuid,
        SourceVBloodName: randomAbility.sourceVBloodName,
        SlotIndex: ability.slot,
        Description: randomAbility.description
      }
    }
  })
  
  return autoConfig
}

export function analyzeAbilityCompatibility(
  _abilityGuid: number,
  _sourcePrefabGuid: number,
  _sourceVBloodName: string,
  _sourceSlot: number,
  abilityCategory: string,
  bossPrefabGuid: number,
  targetSlot: number
) {
  const reasons: string[] = []
  const warnings: string[] = []
  
  // Encontrar información del boss
  const bossVBlood = VBLOOD_DATABASE.find(v => v.prefabGuid === bossPrefabGuid)
  if (!bossVBlood) {
    return {
      level: CompatibilityLevel.Warning,
      reasons: [],
      warnings: ['Boss not found in database']
    }
  }

  // Encontrar información de la habilidad del slot objetivo
  const targetAbility = bossVBlood.abilities.find(a => a.slot === targetSlot)
  if (!targetAbility) {
    return {
      level: CompatibilityLevel.Warning,
      reasons: [],
      warnings: ['Target slot not found in boss abilities']
    }
  }

  // Análisis de compatibilidad por categoría
  if (abilityCategory.toLowerCase() === targetAbility.category.toLowerCase()) {
    reasons.push('Same ability category')
  } else {
    warnings.push(`Different category: ${abilityCategory} vs ${targetAbility.category}`)
  }

  // Análisis de nivel de compatibilidad
  const sameCategory = abilityCategory.toLowerCase() === targetAbility.category.toLowerCase()
  const isBasicAttack = abilityCategory.toLowerCase().includes('basic') || abilityCategory.toLowerCase().includes('attack')
  const isMovement = abilityCategory.toLowerCase().includes('movement')
  const isSpecial = abilityCategory.toLowerCase().includes('special')

  let level: CompatibilityLevel

  if (sameCategory) {
    level = CompatibilityLevel.Perfect
    reasons.push('Perfect category match')
  } else if (isBasicAttack && targetAbility.category.toLowerCase().includes('attack')) {
    level = CompatibilityLevel.Good
    reasons.push('Compatible attack abilities')
  } else if (isMovement && targetAbility.category.toLowerCase().includes('movement')) {
    level = CompatibilityLevel.Good
    reasons.push('Compatible movement abilities')
  } else if (isSpecial && targetAbility.category.toLowerCase().includes('special')) {
    level = CompatibilityLevel.Good
    reasons.push('Compatible special abilities')
  } else {
    level = CompatibilityLevel.Warning
    warnings.push('Cross-category ability swap')
  }

  return {
    level,
    reasons,
    warnings
  }
}
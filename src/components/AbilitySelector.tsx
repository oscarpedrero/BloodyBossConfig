import { useState, useMemo } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import { VBLOOD_DATABASE } from '../data/vbloodDatabase'
import { analyzeAbilityCompatibility, CompatibilityLevel } from '../utils/abilityCompatibility'

interface AbilitySelectorProps {
  value: number
  onSelect: (abilityGuid: number, sourcePrefabGuid: number, sourceVBloodName: string, slotIndex: number, description: string) => void
  label?: string
  slotIndex?: number
  bossPrefabGuid?: number
  targetSlot?: number
}

export function AbilitySelector({ value, onSelect, label = "Ability", slotIndex = 0, bossPrefabGuid, targetSlot }: AbilitySelectorProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Componentes de compatibilidad
  const CompatibilityIcon = ({ level }: { level: CompatibilityLevel }) => {
    switch (level) {
      case CompatibilityLevel.Perfect:
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case CompatibilityLevel.Good:
        return <CheckCircle className="h-3 w-3 text-blue-500" />
      case CompatibilityLevel.Warning:
        return <AlertTriangle className="h-3 w-3 text-yellow-500" />
      case CompatibilityLevel.Incompatible:
        return <XCircle className="h-3 w-3 text-red-500" />
    }
  }

  const CompatibilityBadge = ({ level }: { level: CompatibilityLevel }) => {
    const colors = {
      [CompatibilityLevel.Perfect]: 'bg-green-100 text-green-800',
      [CompatibilityLevel.Good]: 'bg-blue-100 text-blue-800',
      [CompatibilityLevel.Warning]: 'bg-yellow-100 text-yellow-800',
      [CompatibilityLevel.Incompatible]: 'bg-red-100 text-red-800'
    }
    
    return (
      <Badge className={`${colors[level]} text-xs px-1 py-0`} variant="secondary">
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </Badge>
    )
  }

  // Recopilar todas las habilidades de todos los VBloods
  const allAbilities = useMemo(() => {
    const abilities: Array<{
      abilityGuid: number
      sourcePrefabGuid: number
      sourceVBloodName: string
      vbloodLevel: number
      slotIndex: number
      category: string
      description: string
      compatibility?: {
        level: CompatibilityLevel
        reasons: string[]
        warnings: string[]
      }
    }> = []

    VBLOOD_DATABASE.forEach((vblood: any) => {
      vblood.abilities.forEach((ability: any) => {
        let compatibility
        
        // Calcular compatibilidad si tenemos los datos necesarios
        if (bossPrefabGuid && targetSlot !== undefined) {
          compatibility = analyzeAbilityCompatibility(
            ability.guid,
            vblood.prefabGuid,
            vblood.name,
            ability.slot,
            ability.category,
            bossPrefabGuid,
            targetSlot
          )
        }
        
        abilities.push({
          abilityGuid: ability.guid,
          sourcePrefabGuid: vblood.prefabGuid,
          sourceVBloodName: vblood.name,
          vbloodLevel: vblood.level,
          slotIndex: ability.slot,
          category: ability.category,
          description: `${ability.category} ability from ${vblood.name}`,
          compatibility
        })
      })
    })

    return abilities
  }, [bossPrefabGuid, targetSlot])

  const filteredAbilities = useMemo(() => {
    let filtered = allAbilities

    if (searchTerm) {
      filtered = filtered.filter(ability => 
        ability.sourceVBloodName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ability.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ability.vbloodLevel.toString().includes(searchTerm)
      )
    }

    return filtered.slice(0, 50) // Limitar resultados
  }, [searchTerm, allAbilities])

  const selectedAbility = allAbilities.find(a => a.abilityGuid === value)

  const handleSelect = (ability: typeof allAbilities[0]) => {
    onSelect(
      ability.abilityGuid,
      ability.sourcePrefabGuid,
      ability.sourceVBloodName,
      ability.slotIndex,
      ability.description
    )
    setIsOpen(false)
  }

  return (
    <div className="space-y-2">
      <Label>Slot {slotIndex}: {label}</Label>
      <div className="relative">
        <Input
          value={selectedAbility ? `${selectedAbility.sourceVBloodName} - ${selectedAbility.category}` : ''}
          placeholder="Search ability by VBlood name or category..."
          onClick={() => setIsOpen(true)}
          readOnly
          className="cursor-pointer"
        />
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto">
            <div className="p-2 border-b">
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search ability..."
                autoFocus
              />
            </div>
            
            <div className="py-1">
              {filteredAbilities.map((ability, index) => (
                <div
                  key={`${ability.abilityGuid}-${index}`}
                  className="px-3 py-2 hover:bg-accent cursor-pointer text-sm"
                  onClick={() => handleSelect(ability)}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{ability.sourceVBloodName}</div>
                    <div className="flex items-center gap-1">
                      {ability.compatibility && (
                        <>
                          <CompatibilityIcon level={ability.compatibility.level} />
                          <CompatibilityBadge level={ability.compatibility.level} />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {ability.category} • Level {ability.vbloodLevel}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Ability GUID: {ability.abilityGuid}
                  </div>
                </div>
              ))}
              
              {filteredAbilities.length === 0 && (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  No abilities found
                </div>
              )}
            </div>
            
            <div className="p-2 border-t text-xs text-muted-foreground">
              {filteredAbilities.length} abilities available
            </div>
          </div>
        )}
      </div>
      
      {/* Cerrar dropdown al hacer click fuera */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
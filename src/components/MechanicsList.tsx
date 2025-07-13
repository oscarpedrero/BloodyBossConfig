import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Edit2, Trash2, Eye, EyeOff, Clock, Users, Activity } from 'lucide-react'
import { MechanicHelpButton } from './MechanicHelpButton'
import { mechanicParametersConfig } from '../config/mechanicParameters'

interface MechanicsListProps {
  mechanics: any[]
  onEdit: (mechanic: any) => void
  onDelete: (id: string) => void
}

export function MechanicsList({ mechanics, onEdit, onDelete }: MechanicsListProps) {
  if (mechanics.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-medium mb-2">No mechanics configured</h3>
        <p className="text-sm">Click "Add Mechanic" to start configuring boss mechanics</p>
      </div>
    )
  }

  // Ordenar mecánicas: primero las de HP (de mayor a menor), luego el resto
  const sortedMechanics = [...mechanics].sort((a, b) => {
    // Si ambas son de tipo HP, ordenar por valor de HP descendente
    if (a.Trigger?.Type === 'hp_threshold' && b.Trigger?.Type === 'hp_threshold') {
      return (b.Trigger.Value || 0) - (a.Trigger.Value || 0)
    }
    // Si solo A es de HP, va primero
    if (a.Trigger?.Type === 'hp_threshold') return -1
    // Si solo B es de HP, va primero
    if (b.Trigger?.Type === 'hp_threshold') return 1
    // Si ninguna es de HP, mantener orden original
    return 0
  })

  const getTriggerIcon = (triggerType: string) => {
    switch (triggerType) {
      case 'hp_threshold': return Activity
      case 'time': return Clock
      case 'player_count': return Users
      case 'add_death': return Activity
      case 'damage_taken': return Activity
      default: return Activity
    }
  }

  const getTriggerDescription = (trigger: any) => {
    const comparisonSymbols: Record<string, string> = {
      'less_than': '<',
      'greater_than': '>',
      'equals': '=',
      'less_than_or_equals': '≤',
      'greater_than_or_equals': '≥'
    }
    const comparisonSymbol = comparisonSymbols[trigger.Comparison] || trigger.Comparison

    switch (trigger.Type) {
      case 'hp_threshold':
        return `HP ${comparisonSymbol} ${trigger.Value}%`
      case 'time':
        return `After ${trigger.Value}s ${trigger.OneTime ? '' : `(repeat every ${trigger.RepeatInterval}s)`}`
      case 'player_count':
        return `Players ${comparisonSymbol} ${trigger.Value}`
      case 'add_death':
        return `${trigger.AddCount || 1} ${trigger.AddName || 'adds'} killed`
      case 'damage_taken':
        return `${trigger.Value} damage${trigger.TimeWindow > 0 ? ` in ${trigger.TimeWindow}s` : ''}`
      default:
        return 'Unknown trigger'
    }
  }

  const getParametersSummary = (type: string, parameters: any) => {
    const summary: string[] = []
    const config = mechanicParametersConfig[type]
    
    if (!config) {
      // Fallback para tipos sin configuración
      const keys = Object.keys(parameters).slice(0, 3)
      keys.forEach(key => {
        if (parameters[key] !== undefined && parameters[key] !== '' && key !== 'announcement') {
          summary.push(`${key}: ${parameters[key]}`)
        }
      })
      return summary
    }

    // Priorizar ciertos parámetros importantes por tipo
    const priorityParams: Record<string, string[]> = {
      stun: ['target', 'duration', 'mark_duration'],
      aoe: ['aoe_type', 'pattern', 'damage', 'radius'],
      enrage: ['damage_multiplier', 'movement_speed_multiplier', 'duration'],
      shield: ['shield_type', 'shield_amount', 'duration'],
      summon: ['summon_type', 'count', 'pattern'],
      heal: ['heal_amount', 'heal_type', 'target'],
      fear: ['duration', 'radius', 'target'],
      slow: ['slow_amount', 'duration', 'min_players'],
      absorb: ['absorb_type', 'amount', 'min_players'],
      teleport: ['teleport_type', 'range', 'after_effect'],
      trap: ['trap_type', 'count', 'pattern'],
      dot: ['dot_type', 'damage_per_tick', 'duration'],
      clone: ['count', 'health_percent', 'damage_percent'],
      curse: ['curse_type', 'duration', 'stack_count'],
      phase: ['phase_name', 'heal_percent', 'clear_debuffs']
    }

    const priority = priorityParams[type] || []
    const addedParams = new Set<string>()

    // Primero agregar parámetros prioritarios
    priority.forEach(key => {
      const paramConfig = config.find(p => p.key === key)
      if (paramConfig && parameters[key] !== undefined && parameters[key] !== paramConfig.defaultValue) {
        const value = parameters[key]
        let displayValue = value
        
        // Formatear valores especiales
        if (paramConfig.type === 'select' && paramConfig.options) {
          const option = paramConfig.options.find(o => o.value === value)
          displayValue = option?.label || value
        } else if (paramConfig.type === 'percentage') {
          displayValue = `${value}%`
        } else if (paramConfig.type === 'boolean') {
          displayValue = value ? 'Yes' : 'No'
        } else if (typeof value === 'number' && key.includes('duration')) {
          displayValue = `${value}s`
        }
        
        summary.push(`${paramConfig.label}: ${displayValue}`)
        addedParams.add(key)
      }
    })

    // Si quedan espacios, agregar otros parámetros que difieran del default
    if (summary.length < 3) {
      for (const paramConfig of config) {
        if (!addedParams.has(paramConfig.key) && 
            parameters[paramConfig.key] !== undefined && 
            parameters[paramConfig.key] !== paramConfig.defaultValue &&
            paramConfig.key !== 'announcement') {
          
          const value = parameters[paramConfig.key]
          let displayValue = value
          
          if (paramConfig.type === 'select' && paramConfig.options) {
            const option = paramConfig.options.find(o => o.value === value)
            displayValue = option?.label || value
          } else if (paramConfig.type === 'percentage') {
            displayValue = `${value}%`
          } else if (paramConfig.type === 'boolean') {
            displayValue = value ? 'Yes' : 'No'
          }
          
          summary.push(`${paramConfig.label}: ${displayValue}`)
          if (summary.length >= 3) break
        }
      }
    }
    
    return summary.slice(0, 3) // Máximo 3 parámetros en el resumen
  }

  return (
    <div className="space-y-3">
      {sortedMechanics.map((mechanic) => {
        const TriggerIcon = getTriggerIcon(mechanic.Trigger?.Type)
        const parametersSummary = getParametersSummary(mechanic.Type, mechanic.Parameters || {})
        
        return (
          <Card key={mechanic.Id} className={`transition-all ${!mechanic.Enabled ? 'opacity-60' : ''}`}>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium capitalize">
                      {mechanic.Type.replace('_', ' ')} Mechanic
                    </h4>
                    
                    <MechanicHelpButton 
                      mechanicType={mechanic.Type}
                      variant="icon"
                      size="sm"
                    />
                    
                    {mechanic.Enabled ? (
                      <Eye className="h-4 w-4 text-green-600" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <TriggerIcon className="h-3 w-3" />
                      <span>{getTriggerDescription(mechanic.Trigger)}</span>
                    </div>
                    
                    {mechanic.HasTriggered && (
                      <Badge variant="outline" className="text-xs">
                        Triggered {mechanic.TriggerCount} time{mechanic.TriggerCount !== 1 ? 's' : ''}
                      </Badge>
                    )}
                  </div>

                  {parametersSummary.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {parametersSummary.map((param, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {mechanic.Parameters?.announcement && (
                    <div className="text-xs text-muted-foreground italic">
                      "{mechanic.Parameters.announcement}"
                    </div>
                  )}
                </div>

                <div className="flex gap-1 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onEdit(mechanic)
                    }}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (confirm(`Delete ${mechanic.Type} mechanic?`)) {
                        onDelete(mechanic.Id)
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
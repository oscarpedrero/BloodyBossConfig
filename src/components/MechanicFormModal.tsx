import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Switch } from './ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Save, X, HelpCircle, Activity, Clock, Users } from 'lucide-react'
import { MechanicHelpButton } from './MechanicHelpButton'
import { mechanicsDocumentation } from '../data/mechanicsHelp'
import { MechanicType } from '../types/mechanics'
import { mechanicParametersConfig, getDefaultParameters, getVisibleParameters, ParameterDefinition } from '../config/mechanicParameters'
import { PrefabSelector } from './PrefabSelector'

interface MechanicFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (mechanic: any) => void
  mechanic?: any // Para edición
}

export function MechanicFormModal({ isOpen, onClose, onSave, mechanic }: MechanicFormModalProps) {
  const [currentStep, setCurrentStep] = useState('type')
  const [selectedType, setSelectedType] = useState<MechanicType | ''>('')
  
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      enabled: true,
      triggerType: 'hp_threshold',
      triggerValue: 75,
      triggerComparison: 'less_than',
      oneTime: true,
      repeatInterval: 0,
      timeWindow: 0,
      addName: '',
      addCount: 1,
      parameters: {}
    }
  })

  const watchedValues = watch()

  useEffect(() => {
    if (isOpen) {
      if (mechanic) {
        // Modo edición
        setSelectedType(mechanic.Type)
        setCurrentStep('trigger')
        setValue('enabled', mechanic.Enabled)
        setValue('triggerType', mechanic.Trigger?.Type || 'hp_threshold')
        setValue('triggerValue', mechanic.Trigger?.Value || 75)
        setValue('triggerComparison', mechanic.Trigger?.Comparison || 'less_than')
        setValue('oneTime', mechanic.Trigger?.OneTime ?? true)
        setValue('repeatInterval', mechanic.Trigger?.RepeatInterval || 0)
        setValue('timeWindow', mechanic.Trigger?.TimeWindow || 0)
        setValue('addName', mechanic.Trigger?.AddName || '')
        setValue('addCount', mechanic.Trigger?.AddCount || 1)
        
        // Merge existing parameters with defaults to ensure all fields are present
        const defaultParams = getDefaultParametersForType(mechanic.Type)
        const mergedParams = { ...defaultParams, ...mechanic.Parameters }
        setValue('parameters', mergedParams)
      } else {
        // Modo crear nuevo
        setSelectedType('')
        setCurrentStep('type')
        reset()
      }
    }
  }, [isOpen, mechanic, reset, setValue])

  const handleTypeSelect = (type: MechanicType) => {
    setSelectedType(type)
    setCurrentStep('trigger')
    
    // Configurar parámetros por defecto según el tipo
    const defaultParams = getDefaultParametersForType(type)
    setValue('parameters', defaultParams)
  }

  const getDefaultParametersForType = (type: MechanicType) => {
    return getDefaultParameters(type)
  }

  const onSubmit = (data: any) => {
    const mechanicData = {
      Id: mechanic?.Id || crypto.randomUUID(),
      Type: selectedType,
      Enabled: data.enabled,
      Trigger: {
        Type: data.triggerType,
        Value: Number(data.triggerValue),
        Comparison: data.triggerComparison,
        OneTime: data.oneTime,
        RepeatInterval: Number(data.repeatInterval),
        CompoundConditions: null,
        CompoundOperator: 'AND',
        TimeWindow: data.triggerType === 'damage_taken' ? Number(data.timeWindow) : 0,
        AddName: data.triggerType === 'add_death' ? data.addName : null,
        AddCount: data.triggerType === 'add_death' ? Number(data.addCount || 1) : 1
      },
      Parameters: data.parameters,
      HasTriggered: mechanic?.HasTriggered || false,
      LastTriggered: mechanic?.LastTriggered || null,
      TriggerCount: mechanic?.TriggerCount || 0,
      IsExpired: mechanic?.IsExpired || false
    }

    onSave(mechanicData)
    onClose()
  }

  const availableMechanics = [
    // Control Mechanics
    'stun', 'fear', 'root', 'silence', 'mindcontrol',
    // Damage Mechanics  
    'aoe', 'dot', 'knockback', 'weaken', 'curse',
    // Utility Mechanics
    'absorb', 'slow', 'buffsteal', 'trap', 'vision', 'dispel', 'phase', 'pull', 'clone',
    // Defensive Mechanics
    'reflect', 'shield',
    // Support Mechanics
    'heal', 'enrage', 'summon', 'teleport'
  ] as MechanicType[]

  const triggerIcons = {
    hp_threshold: Activity,
    time: Clock,
    players: Users
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose()
      }
    }}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mechanic ? 'Edit Mechanic' : 'Add New Mechanic'}
          </DialogTitle>
          <DialogDescription>
            Configure a combat mechanic for this boss
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Tabs value={currentStep} onValueChange={setCurrentStep}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="type" disabled={mechanic !== undefined}>
                1. Select Type
              </TabsTrigger>
              <TabsTrigger value="trigger" disabled={!selectedType}>
                2. Configure Trigger
              </TabsTrigger>
              <TabsTrigger value="parameters" disabled={!selectedType}>
                3. Parameters
              </TabsTrigger>
            </TabsList>

            <TabsContent value="type" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Choose Mechanic Type</CardTitle>
                  <CardDescription>
                    Select the type of mechanic you want to add
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {availableMechanics.map((type) => {
                      const documentation = mechanicsDocumentation[type]
                      const isSelected = selectedType === type
                      
                      return (
                        <div
                          key={type}
                          className={`
                            relative border rounded-lg p-3 cursor-pointer transition-all
                            ${isSelected ? 'ring-2 ring-primary bg-accent' : 'hover:bg-accent/50'}
                          `}
                          onClick={() => handleTypeSelect(type)}
                        >
                          <div className="absolute top-2 right-2">
                            <MechanicHelpButton 
                              mechanicType={type}
                              variant="icon"
                              size="sm"
                            />
                          </div>
                          
                          <div className="pr-6">
                            <div className="font-medium capitalize mb-1">
                              {type.replace('_', ' ')}
                            </div>
                            
                            {documentation && (
                              <>
                                <div className="text-xs text-muted-foreground mb-2">
                                  {documentation.description}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs ${
                                      documentation.category === 'control' ? 'bg-blue-100 text-blue-800' :
                                      documentation.category === 'damage' ? 'bg-red-100 text-red-800' :
                                      documentation.category === 'support' ? 'bg-green-100 text-green-800' :
                                      documentation.category === 'defensive' ? 'bg-purple-100 text-purple-800' :
                                      'bg-yellow-100 text-yellow-800'
                                    }`}
                                  >
                                    {documentation.category}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {documentation.complexity}
                                  </Badge>
                                </div>
                              </>
                            )}
                            
                            {!documentation && (
                              <div className="text-xs text-muted-foreground">
                                Experimental mechanic
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trigger" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {(() => {
                      const IconComponent = triggerIcons[watchedValues.triggerType as keyof typeof triggerIcons]
                      return IconComponent ? <IconComponent className="h-5 w-5" /> : null
                    })()}
                    Configure Trigger
                  </CardTitle>
                  <CardDescription>
                    Define when this mechanic should activate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      {...register('enabled')}
                      checked={watchedValues.enabled}
                      onCheckedChange={(checked) => setValue('enabled', checked)}
                    />
                    <Label>Enabled</Label>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Trigger Type</Label>
                      <Select 
                        value={watchedValues.triggerType} 
                        onValueChange={(value) => setValue('triggerType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hp_threshold">HP Threshold</SelectItem>
                          <SelectItem value="time">Time Based</SelectItem>
                          <SelectItem value="player_count">Player Count</SelectItem>
                          <SelectItem value="add_death">Add Death</SelectItem>
                          <SelectItem value="damage_taken">Damage Taken</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Comparison</Label>
                      <Select 
                        value={watchedValues.triggerComparison} 
                        onValueChange={(value) => setValue('triggerComparison', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less_than">Less Than (&lt;)</SelectItem>
                          <SelectItem value="greater_than">Greater Than (&gt;)</SelectItem>
                          <SelectItem value="equals">Equals (=)</SelectItem>
                          <SelectItem value="less_than_or_equals">Less Than or Equals (≤)</SelectItem>
                          <SelectItem value="greater_than_or_equals">Greater Than or Equals (≥)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        {watchedValues.triggerType === 'hp_threshold' ? 'HP Percentage' :
                         watchedValues.triggerType === 'time' ? 'Time (seconds)' :
                         watchedValues.triggerType === 'player_count' ? 'Number of Players' :
                         watchedValues.triggerType === 'add_death' ? 'Number to Kill' :
                         watchedValues.triggerType === 'damage_taken' ? 'Damage Amount' :
                         'Value'}
                      </Label>
                      <Input
                        type="number"
                        {...register('triggerValue', { valueAsNumber: true })}
                        min={watchedValues.triggerType === 'hp_threshold' ? 1 : 0}
                        max={watchedValues.triggerType === 'hp_threshold' ? 100 : undefined}
                        placeholder={
                          watchedValues.triggerType === 'hp_threshold' ? '75' :
                          watchedValues.triggerType === 'time' ? '60' :
                          watchedValues.triggerType === 'player_count' ? '3' :
                          watchedValues.triggerType === 'add_death' ? '1' :
                          watchedValues.triggerType === 'damage_taken' ? '1000' : ''
                        }
                      />
                    </div>

                    {/* Campos adicionales según el tipo de trigger */}
                    {watchedValues.triggerType === 'damage_taken' && (
                      <div className="space-y-2">
                        <Label>Time Window (seconds)</Label>
                        <Input
                          type="number"
                          {...register('timeWindow', { valueAsNumber: true })}
                          placeholder="10"
                          min={0}
                        />
                        <p className="text-xs text-muted-foreground">
                          Damage must be taken within this time window (0 = no limit)
                        </p>
                      </div>
                    )}

                    {watchedValues.triggerType === 'add_death' && (
                      <div className="space-y-2">
                        <Label>Add Name</Label>
                        <Input
                          {...register('addName')}
                          placeholder="e.g., Skeleton Warrior"
                        />
                        <p className="text-xs text-muted-foreground">
                          Name of the add type that must die
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={watchedValues.oneTime}
                        onCheckedChange={(checked) => setValue('oneTime', checked)}
                      />
                      <Label>One Time Only</Label>
                    </div>

                    {!watchedValues.oneTime && (
                      <div className="space-y-2">
                        <Label>Repeat Interval (seconds)</Label>
                        <Input
                          type="number"
                          {...register('repeatInterval', { valueAsNumber: true })}
                          min={0}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parameters" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanic Parameters</CardTitle>
                  <CardDescription>
                    Configure specific settings for this {selectedType} mechanic
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MechanicParametersForm 
                    mechanicType={selectedType}
                    parameters={watchedValues.parameters}
                    onParameterChange={(key, value) => {
                      const newParams = { ...watchedValues.parameters, [key]: value }
                      setValue('parameters', newParams)
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            
            <div className="flex gap-2">
              {currentStep !== 'type' && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    if (currentStep === 'trigger') setCurrentStep('type')
                    if (currentStep === 'parameters') setCurrentStep('trigger')
                  }}
                >
                  Previous
                </Button>
              )}
              
              {currentStep !== 'parameters' ? (
                <Button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (currentStep === 'type') {
                      setCurrentStep('trigger')
                    }
                    if (currentStep === 'trigger') {
                      setCurrentStep('parameters')
                    }
                  }}
                  disabled={currentStep === 'type' && !selectedType}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  {mechanic ? 'Update' : 'Create'} Mechanic
                </Button>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Componente para parámetros específicos de cada mecánica
function MechanicParametersForm({ 
  mechanicType, 
  parameters, 
  onParameterChange 
}: {
  mechanicType: MechanicType | ''
  parameters: any
  onParameterChange: (key: string, value: any) => void
}) {
  if (!mechanicType) return null

  const parameterConfig = mechanicParametersConfig[mechanicType]
  if (!parameterConfig) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Parameter configuration for {mechanicType} is not available.</p>
        <p className="text-sm mt-2">This mechanic can still be created with default parameters.</p>
      </div>
    )
  }

  // Ensure parameters have all default values
  const defaultParams = getDefaultParameters(mechanicType)
  const mergedParameters = { ...defaultParams, ...parameters }
  const visibleParameters = getVisibleParameters(mechanicType, mergedParameters)

  const renderParameter = (param: ParameterDefinition) => {
    const value = mergedParameters[param.key] ?? param.defaultValue

    switch (param.type) {
      case 'select':
        return (
          <div key={param.key} className="space-y-2">
            <Label>{param.label}</Label>
            <Select 
              value={String(value)} 
              onValueChange={(val) => onParameterChange(param.key, val)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {param.options?.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {param.description && (
              <p className="text-xs text-muted-foreground">{param.description}</p>
            )}
          </div>
        )

      case 'number':
        // Special case for summon mechanic's prefab_guid
        if (mechanicType === 'summon' && param.key === 'prefab_guid') {
          return (
            <div key={param.key} className="space-y-2">
              <PrefabSelector
                value={value || 0}
                onSelect={(prefabGuid) => onParameterChange(param.key, prefabGuid)}
                label={param.label}
              />
              {param.description && (
                <p className="text-xs text-muted-foreground">{param.description}</p>
              )}
            </div>
          )
        }
        
        return (
          <div key={param.key} className="space-y-2">
            <Label>{param.label}</Label>
            <Input
              type="number"
              value={value}
              onChange={(e) => onParameterChange(param.key, parseFloat(e.target.value) || 0)}
              min={param.min}
              max={param.max}
              step={param.step}
              placeholder={param.placeholder}
            />
            {param.description && (
              <p className="text-xs text-muted-foreground">{param.description}</p>
            )}
          </div>
        )

      case 'percentage':
        return (
          <div key={param.key} className="space-y-2">
            <Label>{param.label}</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={value}
                onChange={(e) => onParameterChange(param.key, parseFloat(e.target.value) || 0)}
                min={param.min ?? 0}
                max={param.max ?? 100}
                step={param.step ?? 1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
            {param.description && (
              <p className="text-xs text-muted-foreground">{param.description}</p>
            )}
          </div>
        )

      case 'boolean':
        return (
          <div key={param.key} className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label>{param.label}</Label>
              {param.description && (
                <p className="text-xs text-muted-foreground">{param.description}</p>
              )}
            </div>
            <Switch
              checked={value === true}
              onCheckedChange={(checked) => onParameterChange(param.key, checked)}
            />
          </div>
        )

      case 'text':
      default:
        return (
          <div key={param.key} className="space-y-2">
            <Label>{param.label}</Label>
            <Input
              value={value || ''}
              onChange={(e) => onParameterChange(param.key, e.target.value)}
              placeholder={param.placeholder}
            />
            {param.description && (
              <p className="text-xs text-muted-foreground">{param.description}</p>
            )}
          </div>
        )
    }
  }

  // Group parameters by type for better organization
  const booleanParams = visibleParameters.filter(p => p.type === 'boolean')
  const otherParams = visibleParameters.filter(p => p.type !== 'boolean')

  return (
    <div className="space-y-6">
      {/* Regular parameters in grid */}
      <div className="grid grid-cols-2 gap-4">
        {otherParams.map(param => renderParameter(param))}
      </div>
      
      {/* Boolean parameters in a separate section */}
      {booleanParams.length > 0 && (
        <div className="space-y-4 pt-4 border-t">
          <h4 className="text-sm font-medium">Options</h4>
          <div className="space-y-3">
            {booleanParams.map(param => renderParameter(param))}
          </div>
        </div>
      )}
    </div>
  )
}
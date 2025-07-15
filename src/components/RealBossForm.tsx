import { useState, useCallback, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { realBossEncounterSchema, RealBossEncounterForm } from '../schemas/realBoss.schema'
import { BossEncounter } from '../types'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { PrefabSelector } from './PrefabSelector'
import { AbilitySelector } from './AbilitySelector'
import { Save, AlertCircle, Trash2, Dice6, Wand2, Plus, X, Wrench, AlertTriangle } from 'lucide-react'
import { autoConfigureAllSlots } from '../utils/abilityCompatibility'
import { AbilityRecommendationsModal } from './AbilityRecommendationsModal'
import { MechanicsList } from './MechanicsList'
import { MechanicFormModal } from './MechanicFormModal'
import { VBLOOD_DATABASE } from '../data/vbloodDatabase'
import { ItemSelector } from './ItemSelector'
import { ItemInfo, findItemById } from '../data/itemsDatabase'

interface RealBossFormProps {
  boss?: BossEncounter
  onSubmit: (data: BossEncounter) => void
  onCancel: () => void
}

export function RealBossForm({ boss, onSubmit, onCancel }: RealBossFormProps) {
  const [activeTab, setActiveTab] = useState('basic')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    // watch,
    control
  } = useForm<RealBossEncounterForm>({
    resolver: zodResolver(realBossEncounterSchema),
    defaultValues: boss || {
      name: '',
      nameHash: '',
      AssetName: '',
      Hour: '12:00',
      HourDespawn: '12:30:00',
      PrefabGUID: 0,
      level: 50,
      multiplier: 1,
      items: [],
      bossSpawn: false,
      Lifetime: 1800,
      x: 0,
      y: 0,
      z: 0,
      unitStats: {
        PhysicalPower: 50,
        SpellPower: 50,
        ResourcePower: 25,
        SiegePower: 10,
        PhysicalResistance: 0,
        SpellResistance: 0,
        FireResistance: 0,
        PassiveHealthRegen: 1,
        CCReduction: 0,
        HealthRecovery: 1,
        DamageReduction: 0,
        HealingReceived: 0
      },
      ConsecutiveSpawns: 0,
      CurrentDifficultyMultiplier: 1,
      IsPaused: false,
      LastAnnouncedPhase: 1,
      Mechanics: [],
      AbilitySwaps: {}
    }
  })

  const watchedPrefabGUID = useWatch({ control, name: 'PrefabGUID' })
  const watchedAbilitySwaps = useWatch({ control, name: 'AbilitySwaps' })
  
  // Estado para la modal de recomendaciones
  const [recommendationsModal, setRecommendationsModal] = useState<{
    isOpen: boolean
    targetSlot: number
    slotCategory: string
  }>({
    isOpen: false,
    targetSlot: 0,
    slotCategory: ''
  })
  
  // Estado para evitar clicks múltiples
  const [isAutoConfiguring, setIsAutoConfiguring] = useState(false)
  
  // Estados para mecánicas
  const [showMechanicModal, setShowMechanicModal] = useState(false)
  const [editingMechanic, setEditingMechanic] = useState<any>(null)

  // Funciones para manejar items
  const watchedItems = useWatch({ control, name: 'items' }) || []
  
  // Funciones para manejar mecánicas
  const watchedMechanics = useWatch({ control, name: 'Mechanics' }) || []
  
  // Reset form when boss changes
  useEffect(() => {
    if (boss) {
      reset(boss)
    }
  }, [boss, reset])
  
  // Log errors when they change
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log('Form validation errors:', errors)
    }
  }, [errors])

  const addItem = () => {
    const currentItems = watchedItems
    const newItem = {
      name: '',
      ItemID: 0,
      Stack: 1,
      Chance: 100,
      Color: '#ffffff'
    }
    setValue('items', [...currentItems, newItem])
  }

  const removeItem = (index: number) => {
    const currentItems = watchedItems
    setValue('items', currentItems.filter((_, i) => i !== index))
  }

  const addMechanic = (mechanic: any) => {
    const currentMechanics = watchedMechanics
    setValue('Mechanics', [...currentMechanics, mechanic])
    setShowMechanicModal(false)
  }

  const updateMechanic = (updatedMechanic: any) => {
    const currentMechanics = [...watchedMechanics]
    const index = currentMechanics.findIndex(m => m.Id === updatedMechanic.Id)
    if (index >= 0) {
      currentMechanics[index] = updatedMechanic
      setValue('Mechanics', currentMechanics)
    }
    setEditingMechanic(null)
  }

  const removeMechanic = (id: string) => {
    const currentMechanics = watchedMechanics
    setValue('Mechanics', currentMechanics.filter((m: any) => m.Id !== id))
  }

  const updateItem = (index: number, field: string, value: any) => {
    const currentItems = [...watchedItems]
    currentItems[index] = { ...currentItems[index], [field]: value }
    console.log('Updating items array:', currentItems)
    console.log('Updated item at index', index, ':', currentItems[index])
    setValue('items', currentItems, { shouldValidate: true })
  }

  const onFormSubmit = (data: RealBossEncounterForm) => {
    console.log('Form validation passed, submitting data:', data);
    // Calcular HourDespawn automáticamente basándose en Hour + Lifetime
    const spawnTime = data.Hour
    const lifetime = data.Lifetime || 1800 // Default 30 minutes
    
    // Convertir hora de spawn a minutos
    const [hours, minutes] = spawnTime.split(':').map(Number)
    const spawnMinutes = hours * 60 + minutes
    
    // Añadir lifetime en segundos convertido a minutos
    const despawnMinutes = spawnMinutes + Math.floor(lifetime / 60)
    
    // Convertir de vuelta a formato HH:MM:SS
    const despawnHours = Math.floor(despawnMinutes / 60) % 24
    const despawnMins = despawnMinutes % 60
    const hourDespawn = `${despawnHours.toString().padStart(2, '0')}:${despawnMins.toString().padStart(2, '0')}:00`
    
    // Clean up null fields that should be undefined
    const cleanedData = {
      ...data,
      LastSuccessfulKill: data.LastSuccessfulKill || undefined,
      LastSpawn: data.LastSpawn || undefined,
      PausedAt: data.PausedAt || undefined,
      HourDespawn: hourDespawn
    }
    
    // Remove undefined values to let the backend handle them
    const finalData = Object.entries(cleanedData).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value
      }
      return acc
    }, {} as any)
    
    onSubmit(finalData as BossEncounter)
  }

  const handlePrefabSelect = (prefabGuid: number, name: string, assetName: string) => {
    // Verificar si hay habilidades configuradas antes de cambiar
    const hasConfiguredAbilities = watchedAbilitySwaps && Object.keys(watchedAbilitySwaps).length > 0
    
    if (hasConfiguredAbilities && watchedPrefabGUID !== prefabGuid) {
      const confirmed = confirm(
        "⚠️ Warning: Changing the Prefab will reset all configured abilities.\n\n" +
        "The current ability configuration may not be compatible with the new VBlood.\n\n" +
        "Do you want to continue?"
      )
      
      if (!confirmed) {
        return // No cambiar si el usuario cancela
      }
      
      // Limpiar habilidades existentes al cambiar prefab
      setValue('AbilitySwaps', {})
    }
    
    setValue('PrefabGUID', prefabGuid)
    setValue('AssetName', assetName)
    
    // Auto-generar nameHash usando GUID para evitar colisiones
    setValue('nameHash', crypto.randomUUID().replace(/-/g, ''))
    
    // Obtener información del VBlood seleccionado
    const vblood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === prefabGuid)
    if (vblood) {
      setValue('level', vblood.level)
    }
  }

  const removeAbilitySwap = (slot: string) => {
    const current = { ...watchedAbilitySwaps }
    delete current[slot]
    setValue('AbilitySwaps', current)
  }

  const handleAbilitySelect = (targetSlot: number, abilityGuid: number, sourcePrefabGuid: number, sourceVBloodName: string, _slotIndex: number, description: string) => {
    // Buscar si ya existe una entry para este slot
    const currentAbilitySwaps = watchedAbilitySwaps || {}
    let keyToUse = Object.keys(currentAbilitySwaps).find(key => 
      currentAbilitySwaps[key].SlotIndex === targetSlot
    )
    
    // Si no existe, crear una nueva key
    if (!keyToUse) {
      const existingKeys = Object.keys(currentAbilitySwaps).map(k => parseInt(k)).filter(k => !isNaN(k))
      keyToUse = existingKeys.length > 0 ? (Math.max(...existingKeys) + 1).toString() : "0"
    }
    
    setValue(`AbilitySwaps.${keyToUse}`, {
      AbilityGUID: abilityGuid,
      SourcePrefabGUID: sourcePrefabGuid,
      SourceVBloodName: sourceVBloodName,
      SlotIndex: targetSlot, // Usar el slot del boss, no el slot de la habilidad seleccionada
      Description: description
    })
  }

  const openRecommendationsModal = (targetSlot: number, slotCategory: string) => {
    if (!watchedPrefabGUID) return
    
    setRecommendationsModal({
      isOpen: true,
      targetSlot,
      slotCategory
    })
  }

  const closeRecommendationsModal = () => {
    setRecommendationsModal(prev => ({ ...prev, isOpen: false }))
  }

  const handleRecommendationSelect = (recommendation: any) => {
    handleAbilitySelect(
      recommendationsModal.targetSlot,
      recommendation.abilityGuid,
      recommendation.sourcePrefabGuid,
      recommendation.sourceVBloodName,
      recommendationsModal.targetSlot,
      recommendation.description
    )
  }

  const handleAutoConfigureAll = useCallback(async () => {
    console.log('🔴 handleAutoConfigureAll called, isAutoConfiguring:', isAutoConfiguring)
    
    if (!watchedPrefabGUID || isAutoConfiguring) {
      console.log('❌ No watchedPrefabGUID or already configuring, returning')
      return
    }
    
    setIsAutoConfiguring(true)
    console.log('⏸️ About to show confirm dialog')
    
    try {
      const confirmed = await window.confirm(
        "🎲 Auto-configure all ability slots?\n\n" +
        "This will randomly assign compatible abilities to all slots based on compatibility analysis.\n\n" +
        "Current configuration will be replaced."
      )
      
      console.log('✅ Confirm result:', confirmed)
      
      if (confirmed) {
        console.log('🎯 User confirmed - executing auto config')
        const autoConfig = autoConfigureAllSlots(watchedPrefabGUID)
        console.log('📝 Generated config:', autoConfig)
        
        setValue('AbilitySwaps', autoConfig)
        console.log('💾 setValue called')
      } else {
        console.log('🚫 User cancelled - no changes')
      }
    } catch (error) {
      console.error('❌ Error in confirm dialog:', error)
    } finally {
      setIsAutoConfiguring(false)
      console.log('🔓 Released lock')
    }
  }, [watchedPrefabGUID, setValue, isAutoConfiguring])

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="abilities">Abilities</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="mechanics">Mechanics</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            Configure the basic properties of this boss
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Boss Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Ancient Vampire Lord"
                className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <PrefabSelector
              value={watchedPrefabGUID}
              onSelect={handlePrefabSelect}
              label="Prefab *"
              className={errors.PrefabGUID ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.PrefabGUID && (
              <p className="text-sm text-destructive mt-1">{errors.PrefabGUID.message}</p>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level">Level</Label>
              <Input
                id="level"
                type="number"
                {...register('level', { valueAsNumber: true })}
                min={1}
                max={100}
                className={errors.level ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.level && (
                <p className="text-sm text-destructive">{errors.level.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="multiplier">Health Multiplier</Label>
              <Input
                id="multiplier"
                type="number"
                step="0.1"
                {...register('multiplier', { valueAsNumber: true })}
                min={0.1}
                max={10}
                placeholder="1.0"
                className={errors.multiplier ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.multiplier && (
                <p className="text-sm text-destructive">{errors.multiplier.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="Hour">Spawn Time</Label>
              <Input
                id="Hour"
                {...register('Hour')}
                placeholder="12:00"
                className={errors.Hour ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.Hour && (
                <p className="text-sm text-destructive">{errors.Hour.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="Lifetime">Lifetime (seconds)</Label>
              <Input
                id="Lifetime"
                type="number"
                {...register('Lifetime', { valueAsNumber: true })}
                min={0}
                placeholder="1800"
              />
              <p className="text-sm text-muted-foreground">
                (0) = infinite
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
          <CardDescription>
            Set the spawn location for this boss
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="x">X Coordinate</Label>
              <Input
                id="x"
                type="number"
                step="0.01"
                {...register('x', { valueAsNumber: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="y">Y Coordinate</Label>
              <Input
                id="y"
                type="number"
                step="0.01"
                {...register('y', { valueAsNumber: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="z">Z Coordinate</Label>
              <Input
                id="z"
                type="number"
                step="0.01"
                {...register('z', { valueAsNumber: true })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="abilities" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ability Swaps</CardTitle>
          <CardDescription>
            Configure which abilities this boss uses from other VBloods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mostrar información del VBlood seleccionado */}
          {watchedPrefabGUID > 0 && (() => {
            const selectedVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === watchedPrefabGUID)
            return selectedVBlood ? (
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>{selectedVBlood.name}</strong> has {selectedVBlood.abilities.length} abilities:
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  {selectedVBlood.abilities.map((ability: any) => (
                    <div key={ability.slot}>
                      Slot {ability.slot}: {ability.category}
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAutoConfigureAll}
                    disabled={isAutoConfiguring}
                    className="w-full"
                  >
                    <Wand2 className="mr-2 h-4 w-4" />
                    {isAutoConfiguring ? 'Configuring...' : 'Auto-Configure All Slots'}
                  </Button>
                </div>
              </div>
            ) : null
          })()}

          {/* Renderizar slots basados en el VBlood seleccionado */}
          {(() => {
            const selectedVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === watchedPrefabGUID)
            if (!selectedVBlood) return null
            
            return selectedVBlood.abilities.map((vbloodAbility: any) => {
              // Buscar si hay una habilidad configurada para este slot (por SlotIndex, no por key)
              const configuredAbility = watchedAbilitySwaps && Object.values(watchedAbilitySwaps).find(
                (ability: any) => ability.SlotIndex === vbloodAbility.slot
              )
              
              // Encontrar la key del objeto que corresponde a este slot
              const slotKey = configuredAbility ? 
                Object.keys(watchedAbilitySwaps || {}).find(key => 
                  watchedAbilitySwaps![key].SlotIndex === vbloodAbility.slot
                ) : undefined
              
              return (
                <div key={`slot-${vbloodAbility.slot}`} className="flex items-end gap-2 p-4 border rounded">
                  <div className="flex-1">
                    <AbilitySelector
                      value={configuredAbility?.AbilityGUID || vbloodAbility.guid}
                      onSelect={(abilityGuid, sourcePrefabGuid, sourceVBloodName, slotIndex, description) => 
                        handleAbilitySelect(vbloodAbility.slot, abilityGuid, sourcePrefabGuid, sourceVBloodName, slotIndex, description)
                      }
                      label={`${vbloodAbility.category} Ability`}
                      slotIndex={vbloodAbility.slot}
                      bossPrefabGuid={watchedPrefabGUID}
                      targetSlot={vbloodAbility.slot}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {configuredAbility ? (
                        <span>Custom: {configuredAbility.Description}</span>
                      ) : (
                        <span>Default: {vbloodAbility.category} from {selectedVBlood.name}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => openRecommendationsModal(vbloodAbility.slot, vbloodAbility.category)}
                      title="View compatible abilities"
                    >
                      <Dice6 className="h-4 w-4" />
                    </Button>
                    
                    {configuredAbility && slotKey && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeAbilitySwap(slotKey)}
                        title="Reset to default"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )
            })
          })()}
          
          {watchedPrefabGUID === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Select a VBlood first to see available ability slots
            </div>
          )}
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Unit Stats</CardTitle>
              <CardDescription>
                Configure the combat statistics for this boss
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                {/* Combat Stats */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Combat Power</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="physicalPower">Physical Power</Label>
                      <Input
                        id="physicalPower"
                        type="number"
                        step="0.01"
                        {...register('unitStats.PhysicalPower', { valueAsNumber: true })}
                        placeholder="62.67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spellPower">Spell Power</Label>
                      <Input
                        id="spellPower"
                        type="number"
                        step="0.01"
                        {...register('unitStats.SpellPower', { valueAsNumber: true })}
                        placeholder="62.67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resourcePower">Resource Power</Label>
                      <Input
                        id="resourcePower"
                        type="number"
                        step="0.01"
                        {...register('unitStats.ResourcePower', { valueAsNumber: true })}
                        placeholder="26.4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="siegePower">Siege Power</Label>
                      <Input
                        id="siegePower"
                        type="number"
                        step="0.01"
                        {...register('unitStats.SiegePower', { valueAsNumber: true })}
                        placeholder="10"
                      />
                    </div>
                  </div>
                </div>

                {/* Resistances & Defense */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Resistances & Defense</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="physicalResistance">Physical Resistance</Label>
                      <Input
                        id="physicalResistance"
                        type="number"
                        step="0.01"
                        {...register('unitStats.PhysicalResistance', { valueAsNumber: true })}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spellResistance">Spell Resistance</Label>
                      <Input
                        id="spellResistance"
                        type="number"
                        step="0.01"
                        {...register('unitStats.SpellResistance', { valueAsNumber: true })}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fireResistance">Fire Resistance</Label>
                      <Input
                        id="fireResistance"
                        type="number"
                        step="0.01"
                        {...register('unitStats.FireResistance', { valueAsNumber: true })}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="damageReduction">Damage Reduction</Label>
                      <Input
                        id="damageReduction"
                        type="number"
                        step="0.01"
                        {...register('unitStats.DamageReduction', { valueAsNumber: true })}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Recovery & Regeneration */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Recovery & Regeneration</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="passiveHealthRegen">Passive Health Regen</Label>
                      <Input
                        id="passiveHealthRegen"
                        type="number"
                        step="0.01"
                        {...register('unitStats.PassiveHealthRegen', { valueAsNumber: true })}
                        placeholder="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="healthRecovery">Health Recovery</Label>
                      <Input
                        id="healthRecovery"
                        type="number"
                        step="0.01"
                        {...register('unitStats.HealthRecovery', { valueAsNumber: true })}
                        placeholder="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="healingReceived">Healing Received</Label>
                      <Input
                        id="healingReceived"
                        type="number"
                        step="0.01"
                        {...register('unitStats.HealingReceived', { valueAsNumber: true })}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Crowd Control */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Crowd Control</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="ccReduction">CC Reduction</Label>
                      <Input
                        id="ccReduction"
                        type="number"
                        step="0.01"
                        {...register('unitStats.CCReduction', { valueAsNumber: true })}
                        placeholder="0"
                      />
                      <p className="text-xs text-muted-foreground">
                        Reduces duration of crowd control effects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Drop Items</CardTitle>
                  <CardDescription>
                    Configure what items this boss drops when defeated
                  </CardDescription>
                </div>
                <Button type="button" onClick={addItem} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {watchedItems.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No items configured</p>
                  <p className="text-sm">Click "Add Item" to configure drop rewards</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {watchedItems.map((item, index) => (
                    <div key={`item-${index}-${item.ItemID}`} className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Item #{index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`item-name-${index}`}>Item Name *</Label>
                          <Input
                            id={`item-name-${index}`}
                            value={item.name}
                            onChange={(e) => updateItem(index, 'name', e.target.value)}
                            placeholder="Witchdust"
                            className={errors.items?.[index]?.name ? 'border-red-500 focus:border-red-500' : ''}
                          />
                          {errors.items?.[index]?.name && (
                            <p className="text-sm text-destructive">{errors.items[index].name?.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <ItemSelector
                            value={item.ItemID ? findItemById(item.ItemID) || null : null}
                            onSelect={(selectedItem: ItemInfo) => {
                              console.log('Selected item:', selectedItem)
                              console.log('Current item before update:', item)
                              
                              // Update all fields at once
                              const updatedItem = {
                                ...item,
                                name: selectedItem.name,
                                ItemID: selectedItem.ItemID,
                                Stack: (!item.Stack || item.Stack === 1) ? (selectedItem.Stack || 1) : item.Stack,
                                Chance: (!item.Chance || item.Chance === 100) ? (selectedItem.Chance || 100) : item.Chance,
                                Color: (!item.Color || item.Color === '#ffffff') ? (selectedItem.Color || '#ffffff') : item.Color
                              }
                              
                              const currentItems = [...watchedItems]
                              currentItems[index] = updatedItem
                              console.log('Setting entire items array with updated item:', currentItems)
                              setValue('items', currentItems, { shouldValidate: true })
                            }}
                            label="Select Item"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`item-stack-${index}`}>Stack Size *</Label>
                          <Input
                            id={`item-stack-${index}`}
                            type="number"
                            min="1"
                            value={item.Stack}
                            onChange={(e) => updateItem(index, 'Stack', parseInt(e.target.value) || 1)}
                            placeholder="10"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`item-chance-${index}`}>Drop Chance % *</Label>
                          <Input
                            id={`item-chance-${index}`}
                            type="number"
                            min="0"
                            max="100"
                            value={item.Chance}
                            onChange={(e) => updateItem(index, 'Chance', parseInt(e.target.value) || 0)}
                            placeholder="35"
                          />
                        </div>

                        <div className="space-y-2 col-span-2">
                          <Label htmlFor={`item-color-${index}`}>Color (Hex) *</Label>
                          <div className="flex gap-2">
                            <Input
                              id={`item-color-${index}`}
                              value={item.Color}
                              onChange={(e) => updateItem(index, 'Color', e.target.value)}
                              placeholder="#daa520"
                              className="flex-1"
                            />
                            <input
                              type="color"
                              value={item.Color}
                              onChange={(e) => updateItem(index, 'Color', e.target.value)}
                              className="w-12 h-10 border rounded cursor-pointer"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Color for the item name display in chat
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mechanics" className="space-y-6">
          {/* Experimental Warning */}
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-800 text-lg">⚠️ EXPERIMENTAL FEATURE</AlertTitle>
            <AlertDescription className="text-red-700">
              <div className="space-y-3 mt-2">
                <p className="font-semibold">
                  This mechanics system is highly experimental and may cause unexpected behavior on your server!
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Only some mechanics are currently functional</li>
                  <li>Mechanics may behave differently than expected</li>
                  <li>Some mechanics might cause server instability or crashes</li>
                  <li>Always test thoroughly on a development server first</li>
                </ul>
                <p className="text-sm italic">
                  Use at your own risk. We recommend backing up your server configuration before enabling mechanics.
                </p>
              </div>
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Boss Mechanics</CardTitle>
                  <CardDescription>
                    Configure special combat mechanics that trigger based on boss HP, time, or player count
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('/mechanics', '_blank')}
                  >
                    <Wrench className="h-4 w-4 mr-2" />
                    Doc. Mechanics
                  </Button>
                  <Button 
                    type="button"
                    size="sm"
                    onClick={() => setShowMechanicModal(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Mechanic
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <MechanicsList 
                mechanics={watchedMechanics || []}
                onEdit={(mechanic) => setEditingMechanic(mechanic)}
                onDelete={(id) => removeMechanic(id)}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Validation Errors</AlertTitle>
          <AlertDescription>
            <div className="mt-2 space-y-1">
              <p>Please fix the following errors:</p>
              <ul className="list-disc list-inside text-sm">
                {Object.entries(errors).map(([field, error]) => {
                  // Handle nested errors
                  if (field === 'items' && Array.isArray(error)) {
                    return error.map((itemError, index) => 
                      itemError && Object.entries(itemError).map(([itemField, itemFieldError]: [string, any]) => (
                        <li key={`${field}-${index}-${itemField}`}>
                          Item {index + 1} - {itemField}: {itemFieldError?.message || 'Invalid value'}
                        </li>
                      ))
                    )
                  } else if (field === 'unitStats' && typeof error === 'object') {
                    return Object.entries(error).map(([statField, statError]: [string, any]) => (
                      <li key={`${field}-${statField}`}>
                        Unit Stats - {statField}: {statError?.message || 'Invalid value'}
                      </li>
                    ))
                  } else if (field === 'AbilitySwaps' && typeof error === 'object') {
                    return Object.entries(error).map(([slot, slotError]: [string, any]) => (
                      <li key={`${field}-${slot}`}>
                        Ability Slot {slot}: {slotError?.message || 'Invalid value'}
                      </li>
                    ))
                  }
                  
                  // Regular field errors
                  return (
                    <li key={field}>
                      {field}: {(error as any)?.message || 'Invalid value'}
                    </li>
                  )
                })}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        <Button type="submit" disabled={isSubmitting}>
          <Save className="mr-2 h-4 w-4" />
          {boss ? 'Update Boss' : 'Create Boss'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
      
      {/* Modal de recomendaciones */}
      <AbilityRecommendationsModal
        isOpen={recommendationsModal.isOpen}
        onClose={closeRecommendationsModal}
        bossPrefabGuid={watchedPrefabGUID}
        targetSlot={recommendationsModal.targetSlot}
        slotCategory={recommendationsModal.slotCategory}
        onSelect={handleRecommendationSelect}
      />

    </form>

    {/* Modal de mecánicas - fuera del form principal */}
    <MechanicFormModal
      isOpen={showMechanicModal || editingMechanic !== null}
      onClose={() => {
        setShowMechanicModal(false)
        setEditingMechanic(null)
      }}
      onSave={editingMechanic ? updateMechanic : addMechanic}
      mechanic={editingMechanic}
    />
    </>
  )
}
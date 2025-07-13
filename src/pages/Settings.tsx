import { useState, useEffect } from 'react'
import { Settings, Upload, Download, Save, AlertCircle, CheckCircle, FileText } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { configService } from '../services/config.service'
import { BloodyBossConfig, defaultConfig } from '../types/bepinex-config'
import { open, save } from '@tauri-apps/plugin-dialog'

export function SettingsPage() {
  const [config, setConfig] = useState<BloodyBossConfig>(defaultConfig)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      setLoading(true)
      const loadedConfig = await configService.loadConfig()
      setConfig(loadedConfig)
    } catch (error) {
      console.error('Failed to load config:', error)
      setMessage({
        type: 'error',
        text: 'Failed to load configuration. Using default values.'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      await configService.saveConfig(config)
      setMessage({
        type: 'success',
        text: 'Configuration saved successfully!'
      })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to save configuration'
      })
    } finally {
      setSaving(false)
    }
  }

  const handleImport = async () => {
    try {
      const selected = await open({
        multiple: false,
        filters: [{
          name: 'Config',
          extensions: ['cfg']
        }]
      })

      if (selected) {
        const importedConfig = await configService.importConfigFile(selected as string)
        setConfig(importedConfig)
        setMessage({
          type: 'success',
          text: 'Configuration imported successfully!'
        })
        setTimeout(() => setMessage(null), 3000)
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to import configuration'
      })
    }
  }

  const handleExport = async () => {
    try {
      const filePath = await save({
        defaultPath: 'BloodyBoss.cfg',
        filters: [{
          name: 'Config',
          extensions: ['cfg']
        }]
      })

      if (filePath) {
        await configService.exportConfigFile(filePath, config)
        setMessage({
          type: 'success',
          text: 'Configuration exported successfully!'
        })
        setTimeout(() => setMessage(null), 3000)
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to export configuration'
      })
    }
  }

  const updateConfig = (section: keyof BloodyBossConfig, key: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        [key]: value
      }
    }))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleImport}>
            <Upload className="mr-2 h-4 w-4" />
            Import .cfg
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export .cfg
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="mr-2 h-4 w-4" />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
          {message.type === 'error' ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="main" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="main">Main</TabsTrigger>
          <TabsTrigger value="combat">Combat</TabsTrigger>
          <TabsTrigger value="phases">Phases</TabsTrigger>
          <TabsTrigger value="logging">Logging</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Main configuration options for BloodyBoss
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Mod</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable or disable the boss spawn timer
                  </p>
                </div>
                <Switch
                  checked={config.main.enabled}
                  onCheckedChange={(checked) => updateConfig('main', 'enabled', checked)}
                />
              </div>

              <div className="space-y-2">
                <Label>Kill Message Template</Label>
                <Textarea
                  value={config.main.killMessageBossTemplate}
                  onChange={(e) => updateConfig('main', 'killMessageBossTemplate', e.target.value)}
                  placeholder="The #vblood# boss has been defeated..."
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Available placeholders: #vblood#, #worldbossname#
                </p>
              </div>

              <div className="space-y-2">
                <Label>Spawn Message Template</Label>
                <Textarea
                  value={config.main.spawnMessageBossTemplate}
                  onChange={(e) => updateConfig('main', 'spawnMessageBossTemplate', e.target.value)}
                  placeholder="A Boss #worldbossname# has been summoned..."
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Available placeholders: #worldbossname#, #time#
                </p>
              </div>

              <div className="space-y-2">
                <Label>Despawn Message Template</Label>
                <Textarea
                  value={config.main.despawnMessageBossTemplate}
                  onChange={(e) => updateConfig('main', 'despawnMessageBossTemplate', e.target.value)}
                  placeholder="You failed to kill the Boss..."
                  className="font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>World Boss Buff</Label>
                  <Input
                    type="number"
                    value={config.main.buffForWorldBoss}
                    onChange={(e) => updateConfig('main', 'buffForWorldBoss', parseInt(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    PrefabGUID of the buff applied to bosses
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Kill Buff PrefabGUID</Label>
                  <Input
                    type="number"
                    value={config.main.buffAfterKillingPrefabGUID}
                    onChange={(e) => updateConfig('main', 'buffAfterKillingPrefabGUID', parseInt(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Buff given to players after kill
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Players Online Multiplier</Label>
                    <p className="text-sm text-muted-foreground">
                      Scale boss health by number of online players
                    </p>
                  </div>
                  <Switch
                    checked={config.main.playersOnlineMultiplier}
                    onCheckedChange={(checked) => updateConfig('main', 'playersOnlineMultiplier', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Clear Drop Table</Label>
                    <p className="text-sm text-muted-foreground">
                      Remove original VBlood drop table
                    </p>
                  </div>
                  <Switch
                    checked={config.main.clearDropTable}
                    onCheckedChange={(checked) => updateConfig('main', 'clearDropTable', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Minion Damage</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow minions to damage bosses
                    </p>
                  </div>
                  <Switch
                    checked={config.main.minionDamage}
                    onCheckedChange={(checked) => updateConfig('main', 'minionDamage', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Random Boss</Label>
                    <p className="text-sm text-muted-foreground">
                      Spawn random boss instead of scheduled one
                    </p>
                  </div>
                  <Switch
                    checked={config.main.randomBoss}
                    onCheckedChange={(checked) => updateConfig('main', 'randomBoss', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Team Boss Enable</Label>
                    <p className="text-sm text-muted-foreground">
                      Bosses don't attack each other when spawned together
                    </p>
                  </div>
                  <Switch
                    checked={config.main.teamBossEnable}
                    onCheckedChange={(checked) => updateConfig('main', 'teamBossEnable', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="combat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Combat & Scaling</CardTitle>
              <CardDescription>
                Configure combat mechanics and dynamic scaling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ability Compatibility */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Ability Compatibility</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Compatibility Check</Label>
                      <p className="text-sm text-muted-foreground">
                        Check VBlood ability compatibility
                      </p>
                    </div>
                    <Switch
                      checked={config.abilityCompatibility.enable}
                      onCheckedChange={(checked) => updateConfig('abilityCompatibility', 'enable', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Strict Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Block incompatible ability swaps
                      </p>
                    </div>
                    <Switch
                      checked={config.abilityCompatibility.strictMode}
                      onCheckedChange={(checked) => updateConfig('abilityCompatibility', 'strictMode', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Log Warnings</Label>
                      <p className="text-sm text-muted-foreground">
                        Log compatibility warnings to console
                      </p>
                    </div>
                    <Switch
                      checked={config.abilityCompatibility.logWarnings}
                      onCheckedChange={(checked) => updateConfig('abilityCompatibility', 'logWarnings', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Allow Cross-Type</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow abilities across different creature types
                      </p>
                    </div>
                    <Switch
                      checked={config.abilityCompatibility.allowCrossType}
                      onCheckedChange={(checked) => updateConfig('abilityCompatibility', 'allowCrossType', checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4"></div>

              {/* Dynamic Scaling */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Dynamic Scaling</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Dynamic Scaling</Label>
                      <p className="text-sm text-muted-foreground">
                        Scale bosses based on online players
                      </p>
                    </div>
                    <Switch
                      checked={config.dynamicScaling.enable}
                      onCheckedChange={(checked) => updateConfig('dynamicScaling', 'enable', checked)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Base Health Multiplier</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={config.dynamicScaling.baseHealthMultiplier}
                        onChange={(e) => updateConfig('dynamicScaling', 'baseHealthMultiplier', parseFloat(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Health per Player</Label>
                      <Input
                        type="number"
                        step="0.05"
                        value={config.dynamicScaling.healthPerPlayer}
                        onChange={(e) => updateConfig('dynamicScaling', 'healthPerPlayer', parseFloat(e.target.value))}
                      />
                      <p className="text-xs text-muted-foreground">
                        Additional health % per player
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Damage per Player</Label>
                      <Input
                        type="number"
                        step="0.05"
                        value={config.dynamicScaling.damagePerPlayer}
                        onChange={(e) => updateConfig('dynamicScaling', 'damagePerPlayer', parseFloat(e.target.value))}
                      />
                      <p className="text-xs text-muted-foreground">
                        Additional damage % per player
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Max Players for Scaling</Label>
                      <Input
                        type="number"
                        value={config.dynamicScaling.maxPlayersForScaling}
                        onChange={(e) => updateConfig('dynamicScaling', 'maxPlayersForScaling', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4"></div>

              {/* Other Combat Settings */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Other Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Castle Detection</Label>
                      <p className="text-sm text-muted-foreground">
                        Prevent boss spawns inside player bases
                      </p>
                    </div>
                    <Switch
                      checked={config.castleDetection.enable}
                      onCheckedChange={(checked) => updateConfig('castleDetection', 'enable', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Teleport</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable boss teleport mechanics
                      </p>
                    </div>
                    <Switch
                      checked={config.teleport.enable}
                      onCheckedChange={(checked) => updateConfig('teleport', 'enable', checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Phase System</CardTitle>
              <CardDescription>
                Configure boss phases and difficulty progression
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Phase Announcements */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Phase Announcements</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Announcements</Label>
                      <p className="text-sm text-muted-foreground">
                        Announce phase changes in chat
                      </p>
                    </div>
                    <Switch
                      checked={config.phaseAnnouncements.enable}
                      onCheckedChange={(checked) => updateConfig('phaseAnnouncements', 'enable', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Announce Every Phase</Label>
                      <p className="text-sm text-muted-foreground">
                        Announce all phase changes, not just increases
                      </p>
                    </div>
                    <Switch
                      checked={config.phaseAnnouncements.announceEveryPhase}
                      onCheckedChange={(checked) => updateConfig('phaseAnnouncements', 'announceEveryPhase', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Announce Milestone Spawns</Label>
                      <p className="text-sm text-muted-foreground">
                        Announce every 3 consecutive spawns
                      </p>
                    </div>
                    <Switch
                      checked={config.phaseAnnouncements.announceMilestoneSpawns}
                      onCheckedChange={(checked) => updateConfig('phaseAnnouncements', 'announceMilestoneSpawns', checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4"></div>

              {/* Phase Names */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Phase Names</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Normal</Label>
                    <Input
                      value={config.phaseNames.normal}
                      onChange={(e) => updateConfig('phaseNames', 'normal', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hard</Label>
                    <Input
                      value={config.phaseNames.hard}
                      onChange={(e) => updateConfig('phaseNames', 'hard', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Epic</Label>
                    <Input
                      value={config.phaseNames.epic}
                      onChange={(e) => updateConfig('phaseNames', 'epic', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Legendary</Label>
                    <Input
                      value={config.phaseNames.legendary}
                      onChange={(e) => updateConfig('phaseNames', 'legendary', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4"></div>

              {/* Progressive Difficulty */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Progressive Difficulty</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Progressive Difficulty</Label>
                      <p className="text-sm text-muted-foreground">
                        Bosses get harder with consecutive spawns
                      </p>
                    </div>
                    <Switch
                      checked={config.progressiveDifficulty.enable}
                      onCheckedChange={(checked) => updateConfig('progressiveDifficulty', 'enable', checked)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start Phase</Label>
                      <Input
                        type="number"
                        value={config.progressiveDifficulty.startPhase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'startPhase', parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Max Phase</Label>
                      <Input
                        type="number"
                        value={config.progressiveDifficulty.maxPhase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'maxPhase', parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Health Multiplier Base</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={config.progressiveDifficulty.healthMultiplierBase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'healthMultiplierBase', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Health per Phase</Label>
                      <Input
                        type="number"
                        step="0.05"
                        value={config.progressiveDifficulty.healthMultiplierPerPhase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'healthMultiplierPerPhase', parseFloat(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Damage Multiplier Base</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={config.progressiveDifficulty.damageMultiplierBase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'damageMultiplierBase', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Damage per Phase</Label>
                      <Input
                        type="number"
                        step="0.05"
                        value={config.progressiveDifficulty.damageMultiplierPerPhase}
                        onChange={(e) => updateConfig('progressiveDifficulty', 'damageMultiplierPerPhase', parseFloat(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Reset on Failure</Label>
                        <p className="text-sm text-muted-foreground">
                          Reset phase if players fail to kill boss
                        </p>
                      </div>
                      <Switch
                        checked={config.progressiveDifficulty.resetOnFailure}
                        onCheckedChange={(checked) => updateConfig('progressiveDifficulty', 'resetOnFailure', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Persist Across Restarts</Label>
                        <p className="text-sm text-muted-foreground">
                          Save phase progress between server restarts
                        </p>
                      </div>
                      <Switch
                        checked={config.progressiveDifficulty.persistAcrossRestarts}
                        onCheckedChange={(checked) => updateConfig('progressiveDifficulty', 'persistAcrossRestarts', checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logging" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logging Configuration</CardTitle>
              <CardDescription>
                Configure logging levels, categories, and output settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick Presets */}
              <div className="space-y-3">
                <Label>Quick Presets</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Info')
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Info,Damage:Info,Hook:Info,Timer:Info,Mechanic:Info,Spawn:Info,Death:Info,Reward:Info,System:Info')
                      updateConfig('logging', 'disabledCategories', '')
                    }}
                  >
                    Normal Mode
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Trace')
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Trace,Damage:Trace,Hook:Trace,Timer:Trace,Mechanic:Trace,Spawn:Trace,Death:Trace,Reward:Trace,System:Trace')
                      updateConfig('logging', 'disabledCategories', '')
                    }}
                  >
                    Verbose Mode
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Error')
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Error,Damage:Error,Hook:Error,Timer:Error,Mechanic:Error,Spawn:Error,Death:Error,Reward:Error,System:Error')
                      updateConfig('logging', 'disabledCategories', 'Debug,Timer,Hook')
                    }}
                  >
                    Quiet Mode
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Warning')
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Warning,Damage:Warning,Hook:Warning,Timer:Warning,Mechanic:Warning,Spawn:Info,Death:Info,Reward:Info,System:Warning')
                      updateConfig('logging', 'disabledCategories', 'Debug,Timer,Hook,Damage')
                    }}
                  >
                    Performance Mode
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Info')
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Info,Damage:Info,Death:Info,Mechanic:Info,Spawn:Warning,Reward:Warning,System:Warning')
                      updateConfig('logging', 'disabledCategories', 'Debug,Timer,Hook,Command,Database')
                    }}
                  >
                    Combat Mode
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'globalLogLevel', 'Error')
                      updateConfig('logging', 'categoryLogLevels', 'Spawn:Info,Death:Info,Reward:Info')
                      updateConfig('logging', 'disabledCategories', 'Debug,Timer,Hook,Damage,Boss,Mechanic,Command,Database,System')
                    }}
                  >
                    Essential Mode
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Quickly configure logging for common scenarios
                </p>
              </div>

              <div className="border-t pt-4"></div>

              {/* Global Log Level */}
              <div className="space-y-2">
                <Label>Global Log Level</Label>
                <Select
                  value={config.logging.globalLogLevel}
                  onValueChange={(value) => updateConfig('logging', 'globalLogLevel', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="None">None - No logging</SelectItem>
                    <SelectItem value="Error">Error - Only errors</SelectItem>
                    <SelectItem value="Warning">Warning - Errors and warnings</SelectItem>
                    <SelectItem value="Info">Info - Normal operation logs</SelectItem>
                    <SelectItem value="Debug">Debug - Detailed debugging info</SelectItem>
                    <SelectItem value="Trace">Trace - Most verbose</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Sets the default log level for all categories
                </p>
              </div>

              {/* Category Log Levels */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Category Log Levels</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      updateConfig('logging', 'categoryLogLevels', 'Boss:Warning,Damage:Warning,Hook:Warning,Timer:Warning,Mechanic:Warning,Spawn:Info,Death:Info,Reward:Info,System:Warning')
                    }}
                  >
                    Reset to Default
                  </Button>
                </div>
                <Textarea
                  value={config.logging.categoryLogLevels}
                  onChange={(e) => updateConfig('logging', 'categoryLogLevels', e.target.value)}
                  placeholder="Boss:Warning,Damage:Info,..."
                  className="font-mono text-sm"
                  rows={4}
                />
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Format: Category:Level,Category:Level</p>
                  <p className="font-medium">Available categories:</p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>• System - Core operations</div>
                    <div>• Boss - Boss events</div>
                    <div>• Damage - Damage tracking</div>
                    <div>• Mechanic - Boss mechanics</div>
                    <div>• Command - Commands</div>
                    <div>• Database - DB operations</div>
                    <div>• Hook - Game hooks</div>
                    <div>• Timer - Timer operations</div>
                    <div>• Spawn - Spawn events</div>
                    <div>• Death - Death events</div>
                    <div>• Reward - Rewards</div>
                    <div>• Debug - Debug info</div>
                  </div>
                </div>
              </div>

              {/* Disabled Categories */}
              <div className="space-y-2">
                <Label>Disabled Categories</Label>
                <Input
                  value={config.logging.disabledCategories}
                  onChange={(e) => updateConfig('logging', 'disabledCategories', e.target.value)}
                  placeholder="Debug,Timer,Hook"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated list of categories to completely disable (overrides other settings)
                </p>
              </div>

              <div className="border-t pt-4"></div>

              {/* File Logging */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">File Logging</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Log to File</Label>
                    <p className="text-sm text-muted-foreground">
                      Save logs to a separate file for later analysis
                    </p>
                  </div>
                  <Switch
                    checked={config.logging.logToFile}
                    onCheckedChange={(checked) => updateConfig('logging', 'logToFile', checked)}
                  />
                </div>

                {config.logging.logToFile && (
                  <div className="space-y-2">
                    <Label>Log File Path</Label>
                    <Input
                      value={config.logging.logFilePath}
                      onChange={(e) => updateConfig('logging', 'logFilePath', e.target.value)}
                      placeholder="BepInEx/logs/BloodyBoss.log"
                    />
                    <p className="text-xs text-muted-foreground">
                      Path relative to the server directory
                    </p>
                  </div>
                )}
              </div>

              {/* Tips */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Logging Tips</AlertTitle>
                <AlertDescription className="mt-2 space-y-2">
                  <p>• Use <strong>Performance Mode</strong> for production servers to minimize overhead</p>
                  <p>• Enable <strong>Combat Mode</strong> when debugging boss fights</p>
                  <p>• Use <strong>Verbose Mode</strong> only when troubleshooting specific issues</p>
                  <p>• File logging can impact performance - use sparingly on busy servers</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Phase Message Templates</CardTitle>
              <CardDescription>
                Customize phase announcement messages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Normal Phase Template</Label>
                <Textarea
                  value={config.phaseMessages.normalTemplate}
                  onChange={(e) => updateConfig('phaseMessages', 'normalTemplate', e.target.value)}
                  className="font-mono text-sm"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Hard Phase Template</Label>
                <Textarea
                  value={config.phaseMessages.hardTemplate}
                  onChange={(e) => updateConfig('phaseMessages', 'hardTemplate', e.target.value)}
                  className="font-mono text-sm"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Epic Phase Template</Label>
                <Textarea
                  value={config.phaseMessages.epicTemplate}
                  onChange={(e) => updateConfig('phaseMessages', 'epicTemplate', e.target.value)}
                  className="font-mono text-sm"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Legendary Phase Template</Label>
                <Textarea
                  value={config.phaseMessages.legendaryTemplate}
                  onChange={(e) => updateConfig('phaseMessages', 'legendaryTemplate', e.target.value)}
                  className="font-mono text-sm"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Epic Prefix</Label>
                  <Input
                    value={config.phaseMessages.epicPrefix}
                    onChange={(e) => updateConfig('phaseMessages', 'epicPrefix', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Legendary Prefix</Label>
                  <Input
                    value={config.phaseMessages.legendaryPrefix}
                    onChange={(e) => updateConfig('phaseMessages', 'legendaryPrefix', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Consecutive Info Template</Label>
                <Input
                  value={config.phaseMessages.consecutiveInfo}
                  onChange={(e) => updateConfig('phaseMessages', 'consecutiveInfo', e.target.value)}
                  placeholder=" | Consecutive spawns: #consecutive#"
                />
              </div>

              <Alert>
                <FileText className="h-4 w-4" />
                <AlertTitle>Available Placeholders</AlertTitle>
                <AlertDescription className="mt-2">
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    #bossname#, #phasename#, #phase#, #players#, #damage#, #health#, #consecutive#
                  </code>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
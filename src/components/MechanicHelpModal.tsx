import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Alert, AlertDescription } from './ui/alert'
import { 
  Zap, 
  Shield, 
  Target, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Copy,
  ExternalLink,
  Users,
  Settings
} from 'lucide-react'
import { MechanicType } from '../types/mechanics'
import { mechanicsDocumentation, MechanicDocumentation } from '../data/mechanicsHelp'

interface MechanicHelpModalProps {
  mechanicType: MechanicType | null
  isOpen: boolean
  onClose: () => void
}

const categoryIcons = {
  control: Target,
  damage: Zap,
  support: Shield,
  defensive: Shield,
  utility: Settings
}

const categoryColors = {
  control: 'bg-blue-100 text-blue-800',
  damage: 'bg-red-100 text-red-800', 
  support: 'bg-green-100 text-green-800',
  defensive: 'bg-purple-100 text-purple-800',
  utility: 'bg-yellow-100 text-yellow-800'
}

const complexityColors = {
  basic: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
}

export function MechanicHelpModal({ mechanicType, isOpen, onClose }: MechanicHelpModalProps) {
  const [activeTab, setActiveTab] = useState('overview')
  
  if (!mechanicType || !mechanicsDocumentation[mechanicType]) {
    return null
  }

  const documentation: MechanicDocumentation = mechanicsDocumentation[mechanicType]
  const CategoryIcon = categoryIcons[documentation.category]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // TODO: Add toast notification
  }

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case 'critical': return '🔴'
      case 'high': return '🟡' 
      case 'medium': return '🔵'
      case 'low': return '⚪'
      default: return '📝'
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        {/* Enhanced Header with Visual Elements */}
        <DialogHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-accent">
              <CategoryIcon className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold">
                {documentation.name}
              </DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className={categoryColors[documentation.category]} variant="secondary">
                  {documentation.category}
                </Badge>
                <Badge className={complexityColors[documentation.complexity]} variant="secondary">
                  {documentation.complexity}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>Popularity: {documentation.popularity}/10</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">📋 Overview</TabsTrigger>
            <TabsTrigger value="parameters">⚙️ Parameters</TabsTrigger>
            <TabsTrigger value="examples">💡 Examples</TabsTrigger>
            <TabsTrigger value="strategy">🎯 Strategy</TabsTrigger>
            <TabsTrigger value="effects">✨ Effects</TabsTrigger>
          </TabsList>

          <div className="mt-4 overflow-y-auto max-h-[50vh]">
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {documentation.longDescription}
                </p>
              </div>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Use Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documentation.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Warnings */}
              {documentation.warnings.length > 0 && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="font-semibold mb-2">Important Considerations:</div>
                    <ul className="space-y-1">
                      {documentation.warnings.map((warning, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">⚠️</span>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {/* Documentation Quality Indicator */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Documentation Quality: {documentation.documentationQuality}</span>
                <span>Last Updated: {documentation.lastUpdated}</span>
              </div>
            </TabsContent>

            {/* Parameters Tab */}
            <TabsContent value="parameters" className="space-y-4">
              {documentation.parameters.length > 0 ? (
                <div className="grid gap-4">
                  {documentation.parameters.map((param) => (
                    <Card key={param.key}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{param.label}</CardTitle>
                          <Badge variant="outline">{param.type}</Badge>
                        </div>
                        <CardDescription>{param.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium">Default:</span>
                            <code className="px-2 py-1 bg-muted rounded text-xs">
                              {JSON.stringify(param.defaultValue)}
                            </code>
                          </div>
                          {param.validation && (
                            <div className="text-sm text-muted-foreground">
                              {param.validation.min !== undefined && (
                                <span>Min: {param.validation.min} </span>
                              )}
                              {param.validation.max !== undefined && (
                                <span>Max: {param.validation.max} </span>
                              )}
                              {param.validation.options && (
                                <div>Options: {param.validation.options.join(', ')}</div>
                              )}
                            </div>
                          )}
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                            💡 {param.tooltip}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <Settings className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Parameter documentation is being developed.</p>
                    <p className="text-sm">Check back soon for detailed configuration options.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Examples Tab */}
            <TabsContent value="examples" className="space-y-4">
              {documentation.examples.length > 0 ? (
                <div className="space-y-4">
                  {documentation.examples.map((example, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{example.title}</CardTitle>
                          <Badge className={complexityColors[example.difficulty]} variant="secondary">
                            {example.difficulty}
                          </Badge>
                        </div>
                        <CardDescription>{example.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Command:</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(example.command)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <code className="text-sm block break-all">
                            {example.command}
                          </code>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <strong>Explanation:</strong> {example.explanation}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <ExternalLink className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Example commands are being documented.</p>
                    <p className="text-sm">Check the community wiki for user-contributed examples.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Strategy Tab */}
            <TabsContent value="strategy" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Player Strategy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      For Players
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {documentation.playerStrategy.length > 0 ? (
                      <div className="space-y-3">
                        {documentation.playerStrategy.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30">
                            <span className="text-lg">{getImportanceIcon(tip.importance)}</span>
                            <div>
                              <div className="font-medium text-sm">{tip.title}</div>
                              <div className="text-xs text-muted-foreground mt-1">{tip.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">Strategy tips coming soon...</p>
                    )}
                  </CardContent>
                </Card>

                {/* Admin Strategy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      For Admins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {documentation.adminStrategy.length > 0 ? (
                      <div className="space-y-3">
                        {documentation.adminStrategy.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30">
                            <span className="text-lg">{getImportanceIcon(tip.importance)}</span>
                            <div>
                              <div className="font-medium text-sm">{tip.title}</div>
                              <div className="text-xs text-muted-foreground mt-1">{tip.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">Admin guidance coming soon...</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Effects Tab */}
            <TabsContent value="effects" className="space-y-4">
              {documentation.visualEffects.length > 0 ? (
                <div className="grid gap-4">
                  {documentation.visualEffects.map((effect) => (
                    <Card key={effect.id}>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <div 
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: effect.color || '#888' }}
                          />
                          {effect.name}
                        </CardTitle>
                        <CardDescription>{effect.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="outline">{effect.type}</Badge>
                          {effect.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {effect.duration}s
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <Zap className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Visual effects documentation is being developed.</p>
                    <p className="text-sm">Effects vary by game version and configuration.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
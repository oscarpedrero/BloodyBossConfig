import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { X, CheckCircle, AlertTriangle, AlertCircle, XCircle } from 'lucide-react'
import { getCompatibleAbilities, CompatibilityLevel } from '../utils/abilityCompatibility'

interface AbilityRecommendation {
  sourcePrefabGuid: number
  sourceVBloodName: string
  abilityGuid: number
  compatibility: {
    level: CompatibilityLevel
    warnings: string[]
    reasons: string[]
  }
  description: string
}

interface AbilityRecommendationsModalProps {
  isOpen: boolean
  onClose: () => void
  bossPrefabGuid: number
  targetSlot: number
  slotCategory: string
  onSelect: (recommendation: AbilityRecommendation) => void
}

const CompatibilityIcon = ({ level }: { level: CompatibilityLevel }) => {
  switch (level) {
    case CompatibilityLevel.Perfect:
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case CompatibilityLevel.Good:
      return <CheckCircle className="h-4 w-4 text-blue-500" />
    case CompatibilityLevel.Warning:
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case CompatibilityLevel.Incompatible:
      return <XCircle className="h-4 w-4 text-red-500" />
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
    <Badge className={colors[level]} variant="secondary">
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </Badge>
  )
}

export function AbilityRecommendationsModal({
  isOpen,
  onClose,
  bossPrefabGuid,
  targetSlot,
  slotCategory,
  onSelect
}: AbilityRecommendationsModalProps) {
  const [selectedRecommendation, setSelectedRecommendation] = useState<AbilityRecommendation | null>(null)
  
  if (!isOpen) return null
  
  const recommendations = getCompatibleAbilities(bossPrefabGuid, targetSlot)
  
  const handleSelect = () => {
    if (selectedRecommendation) {
      onSelect(selectedRecommendation)
      onClose()
    }
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background border rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] m-4">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold">
              Ability Recommendations - Slot {targetSlot}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Category: {slotCategory} • Found {recommendations.length} compatible abilities
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          {recommendations.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p>No compatible abilities found for this slot.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recommendations.map((recommendation) => (
                <Card 
                  key={`${recommendation.sourcePrefabGuid}-${recommendation.abilityGuid}`}
                  className={`cursor-pointer transition-all ${
                    selectedRecommendation === recommendation 
                      ? 'ring-2 ring-primary bg-accent' 
                      : 'hover:bg-accent/50'
                  }`}
                  onClick={() => setSelectedRecommendation(recommendation)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CompatibilityIcon level={recommendation.compatibility.level} />
                        <CardTitle className="text-base">
                          {recommendation.sourceVBloodName}
                        </CardTitle>
                        <CompatibilityBadge level={recommendation.compatibility.level} />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        GUID: {recommendation.abilityGuid}
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {recommendation.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {(recommendation.compatibility.reasons.length > 0 || recommendation.compatibility.warnings.length > 0) && (
                    <CardContent className="pt-0">
                      {recommendation.compatibility.reasons.length > 0 && (
                        <div className="mb-2">
                          <p className="text-xs font-medium text-green-700 mb-1">✓ Compatibility reasons:</p>
                          <ul className="text-xs text-green-600 space-y-1">
                            {recommendation.compatibility.reasons.map((reason, i) => (
                              <li key={i}>• {reason}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {recommendation.compatibility.warnings.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-yellow-700 mb-1">⚠ Warnings:</p>
                          <ul className="text-xs text-yellow-600 space-y-1">
                            {recommendation.compatibility.warnings.map((warning, i) => (
                              <li key={i}>• {warning}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between p-6 border-t bg-muted/30">
          <div className="text-sm text-muted-foreground">
            {selectedRecommendation ? (
              <>Selected: <span className="font-medium">{selectedRecommendation.sourceVBloodName}</span></>
            ) : (
              'Select an ability to configure this slot'
            )}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSelect}
              disabled={!selectedRecommendation}
            >
              Apply Selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
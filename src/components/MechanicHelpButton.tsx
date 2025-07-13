import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from './ui/tooltip'
import { HelpCircle, BookOpen, Lightbulb } from 'lucide-react'
import { MechanicType } from '../types/mechanics'
import { MechanicHelpModal } from './MechanicHelpModal'
import { mechanicsDocumentation } from '../data/mechanicsHelp'

interface MechanicHelpButtonProps {
  mechanicType: MechanicType
  variant?: 'icon' | 'button' | 'floating'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantStyles = {
  icon: 'p-1 h-6 w-6',
  button: 'px-3 py-2',
  floating: 'rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow'
}

const sizeStyles = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8', 
  lg: 'h-10 w-10'
}

export function MechanicHelpButton({ 
  mechanicType, 
  variant = 'icon', 
  size = 'md',
  className = '' 
}: MechanicHelpButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const documentation = mechanicsDocumentation[mechanicType]
  const hasDocumentation = documentation && documentation.documentationQuality !== 'incomplete'
  
  // Choose icon based on documentation quality
  const getIcon = () => {
    if (!hasDocumentation) return HelpCircle
    
    switch (documentation.documentationQuality) {
      case 'excellent': return BookOpen
      case 'good': return Lightbulb
      case 'basic': return HelpCircle
      default: return HelpCircle
    }
  }
  
  const IconComponent = getIcon()
  
  const getTooltipContent = () => {
    if (!hasDocumentation) {
      return {
        title: `${mechanicType.charAt(0).toUpperCase() + mechanicType.slice(1)} Mechanic`,
        status: 'Work in Progress 🚧',
        description: 'Documentation is being developed. This mechanic is experimental - use with caution!',
        action: 'Check back soon for detailed guides and examples.',
        className: 'bg-yellow-50 border-yellow-200'
      }
    }
    
    const qualityEmojis = {
      excellent: '✨',
      good: '📚', 
      basic: '📝',
      incomplete: '🚧'
    }
    
    return {
      title: documentation.name,
      status: `${qualityEmojis[documentation.documentationQuality]} ${documentation.documentationQuality.charAt(0).toUpperCase() + documentation.documentationQuality.slice(1)} Documentation`,
      description: documentation.description,
      action: 'Click to view detailed guide, examples, and strategies!',
      className: 'bg-blue-50 border-blue-200'
    }
  }

  const buttonContent = () => {
    switch (variant) {
      case 'button':
        return (
          <>
            <IconComponent className="h-4 w-4 mr-2" />
            Help
          </>
        )
      case 'floating':
      case 'icon':
      default:
        return <IconComponent className={sizeStyles[size]} />
    }
  }

  const tooltipContent = getTooltipContent()

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant={hasDocumentation ? "ghost" : "outline"}
            size={variant === 'button' ? 'sm' : 'icon'}
            className={`
              ${variantStyles[variant]} 
              ${className}
              ${hasDocumentation ? 'hover:bg-blue-50 hover:text-blue-600' : 'hover:bg-yellow-50 hover:text-yellow-600 opacity-80'}
            `}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (hasDocumentation) {
                setIsModalOpen(true)
              }
            }}
          >
            {buttonContent()}
          </Button>
        </TooltipTrigger>
        <TooltipContent className={`max-w-xs p-3 ${tooltipContent.className}`}>
          <div className="space-y-2">
            <div className="font-semibold text-sm">{tooltipContent.title}</div>
            <div className="text-xs font-medium text-muted-foreground">{tooltipContent.status}</div>
            <div className="text-xs">{tooltipContent.description}</div>
            <div className="text-xs italic border-t pt-2 mt-2">{tooltipContent.action}</div>
          </div>
        </TooltipContent>
      </Tooltip>

      <MechanicHelpModal
        mechanicType={mechanicType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </TooltipProvider>
  )
}

// Quick help component for showing just the description
export function MechanicQuickHelp({ mechanicType }: { mechanicType: MechanicType }) {
  const documentation = mechanicsDocumentation[mechanicType]
  
  if (!documentation) {
    return (
      <div className="text-xs text-muted-foreground italic">
        Documentation not available
      </div>
    )
  }

  return (
    <div className="text-xs text-muted-foreground">
      {documentation.description}
    </div>
  )
}

// Mechanic card with integrated help
export function MechanicCard({ 
  mechanicType, 
  onClick,
  selected = false 
}: { 
  mechanicType: MechanicType
  onClick?: () => void
  selected?: boolean
}) {
  const documentation = mechanicsDocumentation[mechanicType]
  const hasDocumentation = documentation && documentation.documentationQuality !== 'incomplete'

  return (
    <div 
      className={`
        relative border rounded-lg p-4 transition-all
        ${selected ? 'ring-2 ring-primary bg-accent' : onClick ? 'hover:bg-accent/50 cursor-pointer' : ''}
      `}
      onClick={onClick}
    >
      {/* Help button in top-right corner */}
      <div className="absolute top-2 right-2">
        <MechanicHelpButton 
          mechanicType={mechanicType}
          variant="floating"
          size="sm"
        />
      </div>

      <div className="pr-8"> {/* Add padding to avoid overlap with help button */}
        <div className="font-medium capitalize mb-1">
          {mechanicType.replace('_', ' ')}
        </div>
        
        {hasDocumentation && (
          <>
            <MechanicQuickHelp mechanicType={mechanicType} />
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <Badge className={`
                text-xs
                ${documentation.category === 'control' ? 'bg-blue-100 text-blue-800' : ''}
                ${documentation.category === 'damage' ? 'bg-red-100 text-red-800' : ''}
                ${documentation.category === 'support' ? 'bg-green-100 text-green-800' : ''}
                ${documentation.category === 'defensive' ? 'bg-purple-100 text-purple-800' : ''}
                ${documentation.category === 'utility' ? 'bg-yellow-100 text-yellow-800' : ''}
              `} variant="secondary">
                {documentation.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {documentation.complexity}
              </Badge>
              {documentation.documentationQuality === 'excellent' && (
                <Badge className="bg-green-100 text-green-800 text-xs" variant="secondary">
                  ✨ Verified
                </Badge>
              )}
            </div>
          </>
        )}
        
        {!hasDocumentation && (
          <>
            <div className="text-xs text-muted-foreground mb-2">
              Experimental mechanic - limited documentation available
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-yellow-100 text-yellow-800 text-xs" variant="secondary">
                🚧 Work in Progress
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 text-xs" variant="secondary">
                ⚠️ Use with Caution
              </Badge>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
import { useState, useMemo } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { VBLOOD_DATABASE } from '../data/vbloodDatabase'

interface PrefabSelectorProps {
  value: number
  onSelect: (prefabGuid: number, name: string, assetName: string) => void
  label?: string
  className?: string
}

export function PrefabSelector({ value, onSelect, label = "VBlood", className }: PrefabSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredVBloods = useMemo(() => {
    if (!searchTerm) return VBLOOD_DATABASE.slice(0, 20) // Mostrar solo los primeros 20 por defecto
    
    return VBLOOD_DATABASE.filter((vblood: any) => 
      vblood.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vblood.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vblood.level.toString().includes(searchTerm)
    ).slice(0, 50)
  }, [searchTerm])

  const selectedVBlood = VBLOOD_DATABASE.find((v: any) => v.prefabGuid === value)

  const handleSelect = (vblood: any) => {
    onSelect(vblood.prefabGuid, vblood.name, vblood.comment)
    setIsOpen(false)
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input
          value={selectedVBlood ? `${selectedVBlood.name} (Level ${selectedVBlood.level})` : ''}
          placeholder="Search VBlood by name, type or level..."
          onClick={() => setIsOpen(true)}
          readOnly
          className={`cursor-pointer ${className || ''}`}
        />
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto">
            <div className="p-2 border-b">
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search VBlood..."
                autoFocus
              />
            </div>
            
            <div className="py-1">
              {filteredVBloods.map((vblood) => (
                <div
                  key={vblood.prefabGuid}
                  className="px-3 py-2 hover:bg-accent cursor-pointer text-sm"
                  onClick={() => handleSelect(vblood)}
                >
                  <div className="font-medium">{vblood.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {vblood.comment} • Level {vblood.level} • {vblood.abilityCount} abilities
                  </div>
                  <div className="text-xs text-muted-foreground">
                    GUID: {vblood.prefabGuid}
                  </div>
                </div>
              ))}
              
              {filteredVBloods.length === 0 && (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  No VBloods found
                </div>
              )}
            </div>
            
            <div className="p-2 border-t text-xs text-muted-foreground">
              {searchTerm ? `${filteredVBloods.length} results` : 'Type to search more...'}
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
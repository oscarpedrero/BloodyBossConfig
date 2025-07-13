import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { MechanicCard } from '../components/MechanicHelpButton'
import { mechanicsDocumentation } from '../data/mechanicsHelp'
import { Search, Filter, BookOpen, Wrench, Target, Shield, Heart } from 'lucide-react'

export function Mechanics() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Lista completa de mecánicas
  const allMechanics = [
    // Control Mechanics
    'stun', 'fear', 'root', 'silence', 'mindcontrol',
    // Damage Mechanics  
    'aoe', 'dot', 'knockback', 'weaken', 'curse',
    // Utility Mechanics
    'absorb', 'slow', 'buffsteal', 'trap', 'vision', 'dispel', 'phase', 'pull', 'clone',
    // Defensive Mechanics
    'reflect', 'shield',
    // Support Mechanics
    'heal', 'enrage', 'summon'
  ]

  const categories = [
    { id: 'all', name: 'All Mechanics', icon: Wrench, count: allMechanics.length },
    { id: 'control', name: 'Control', icon: Target, count: 5 },
    { id: 'damage', name: 'Damage', icon: Wrench, count: 5 },
    { id: 'utility', name: 'Utility', icon: BookOpen, count: 9 },
    { id: 'defensive', name: 'Defensive', icon: Shield, count: 2 },
    { id: 'support', name: 'Support', icon: Heart, count: 3 }
  ]

  // Filtrar mecánicas por búsqueda y categoría
  const filteredMechanics = allMechanics.filter(mechanic => {
    const documentation = mechanicsDocumentation[mechanic]
    const matchesSearch = mechanic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (documentation?.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (documentation?.description.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || 
      (documentation?.category === selectedCategory)
    
    return matchesSearch && matchesCategory
  })

  // Estadísticas de documentación
  const docStats = {
    total: allMechanics.length,
    documented: Object.values(mechanicsDocumentation).filter(doc => doc.documentationQuality !== 'incomplete').length,
    excellent: Object.values(mechanicsDocumentation).filter(doc => doc.documentationQuality === 'excellent').length,
    good: Object.values(mechanicsDocumentation).filter(doc => doc.documentationQuality === 'good').length,
    basic: Object.values(mechanicsDocumentation).filter(doc => doc.documentationQuality === 'basic').length,
    incomplete: Object.values(mechanicsDocumentation).filter(doc => doc.documentationQuality === 'incomplete').length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentation: Mechanics</h1>
        <p className="text-muted-foreground">
          Comprehensive guide to all BloodyBoss mechanics with examples, strategies, and configuration help
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{docStats.total}</div>
            <p className="text-xs text-muted-foreground">Total Mechanics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{docStats.excellent}</div>
            <p className="text-xs text-muted-foreground">✨ Excellent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{docStats.good}</div>
            <p className="text-xs text-muted-foreground">📚 Good</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-600">{docStats.basic}</div>
            <p className="text-xs text-muted-foreground">📝 Basic</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">{docStats.incomplete}</div>
            <p className="text-xs text-muted-foreground">🚧 Work in Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
          <CardDescription>
            Find specific mechanics by name, category, or description
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search mechanics by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon
              const isSelected = selectedCategory === category.id
              return (
                <Badge
                  key={category.id}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    isSelected ? '' : 'hover:bg-accent'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className="h-3 w-3 mr-1" />
                  {category.name} ({category.count})
                </Badge>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card>
        <CardHeader>
          <CardTitle>
            Mechanics Library ({filteredMechanics.length} of {allMechanics.length})
          </CardTitle>
          <CardDescription>
            Click the help buttons (?) to view detailed documentation, examples, and strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredMechanics.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No mechanics found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMechanics.map((mechanic) => (
                <div key={mechanic} className="relative">
                  <MechanicCard 
                    mechanicType={mechanic as any} 
                    onClick={undefined}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Documentation Note */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium">📚 Documentation Status:</p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>✨ Excellent:</strong> Complete documentation with examples, strategies, and full parameter details</li>
              <li>• <strong>📚 Good:</strong> Solid documentation with most features covered</li>
              <li>• <strong>📝 Basic:</strong> Essential information available</li>
              <li>• <strong>🚧 Work in Progress:</strong> Basic description only, use with caution</li>
            </ul>
            <p className="text-xs italic mt-3">
              Documentation is constantly being improved. Mechanics marked as "Work in Progress" are functional but experimental.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
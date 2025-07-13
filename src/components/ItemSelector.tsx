import { useState, useMemo } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ITEM_CATEGORIES, ItemInfo, searchItemsByName, getAllTags } from '../data/itemsDatabase'

interface ItemSelectorProps {
  value: ItemInfo | null
  onSelect: (item: ItemInfo) => void
  label?: string
  className?: string
}

export function ItemSelector({ value, onSelect, label = "Item", className }: ItemSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(ITEM_CATEGORIES[0]?.name || 'Consumable')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showTagFilter, setShowTagFilter] = useState(false)

  const availableTags = useMemo(() => getAllTags(), [])

  // Calculate item counts for each category with current filters
  const categoryItemCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    
    ITEM_CATEGORIES.forEach(category => {
      let items = category.items
      
      // Apply tag filter if tags are selected
      if (selectedTags.length > 0) {
        items = items.filter(item => {
          if (!item.tags || item.tags.length === 0) return false
          return selectedTags.some(tag => item.tags!.includes(tag))
        })
      }
      
      counts[category.name] = items.length
    })
    
    return counts
  }, [selectedTags])

  const filteredItems = useMemo(() => {
    let items: ItemInfo[] = []
    
    // If searching by name, search all items
    if (searchTerm) {
      items = searchItemsByName(searchTerm)
    } else {
      // Otherwise, filter by category
      const category = ITEM_CATEGORIES.find(cat => cat.name === activeCategory)
      items = category?.items || []
    }
    
    // Apply tag filter if tags are selected
    if (selectedTags.length > 0) {
      items = items.filter(item => {
        if (!item.tags || item.tags.length === 0) return false
        return selectedTags.some(tag => item.tags!.includes(tag))
      })
    }
    
    return items
  }, [searchTerm, activeCategory, selectedTags])

  const handleSelect = (item: ItemInfo) => {
    onSelect(item)
    setIsOpen(false)
    setSearchTerm('')
  }

  const handleClose = () => {
    setIsOpen(false)
    setSearchTerm('')
    setActiveCategory(ITEM_CATEGORIES[0]?.name || 'Consumable')
    setSelectedTags([])
    setShowTagFilter(false)
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input
          value={value ? `${value.name} (ID: ${value.ItemID})` : ''}
          placeholder="Click to select an item..."
          onClick={() => setIsOpen(true)}
          readOnly
          className={`cursor-pointer ${className || ''}`}
        />
        
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 bg-black/20" 
              onClick={handleClose}
            />
            
            {/* Dropdown */}
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-[600px] min-w-[500px]">
              <div className="p-3 border-b space-y-2">
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search items by name..."
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      setShowTagFilter(!showTagFilter)
                    }}
                  >
                    {showTagFilter ? 'Hide tag filter' : 'Show tag filter'}
                  </button>
                  {selectedTags.length > 0 && (
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        setSelectedTags([])
                      }}
                    >
                      Clear tags ({selectedTags.length})
                    </button>
                  )}
                </div>
                {showTagFilter && (
                  <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto p-2 border rounded">
                    {availableTags.map(tag => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer text-xs"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleTag(tag)
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="w-full justify-start px-3 pt-2 flex-wrap h-auto">
                  {ITEM_CATEGORIES.map(category => (
                    <TabsTrigger 
                      key={category.name} 
                      value={category.name} 
                      className="text-xs"
                      disabled={categoryItemCounts[category.name] === 0}
                    >
                      {category.name} ({categoryItemCounts[category.name]})
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value={activeCategory} className="mt-2">
                  <div className={showTagFilter ? "h-[250px] overflow-y-auto" : "h-[350px] overflow-y-auto"}>
                    {filteredItems.length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">
                        {searchTerm ? 'No items found' : 'No items in this category'}
                      </div>
                    ) : (
                      <div className="p-1 pb-2">
                        {filteredItems.map((item) => (
                          <button
                            type="button"
                            key={item.ItemID}
                            className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                            onClick={(e) => {
                              e.stopPropagation()
                              e.preventDefault()
                              handleSelect(item)
                            }}
                          >
                            <div className="flex flex-col items-start flex-1">
                              <span className="font-medium">{item.name}</span>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>ID: {item.ItemID}</span>
                                <span>Type: {item.itemType}</span>
                              </div>
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.tags.slice(0, 3).map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-xs px-1 py-0">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {item.tags.length > 3 && (
                                    <span className="text-xs text-muted-foreground">+{item.tags.length - 3}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
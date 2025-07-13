import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Alert, AlertDescription } from '../components/ui/alert'
import { Plus, Search, Edit, Trash2, Loader2, Upload, Download, AlertCircle, CheckCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useBossStore } from '../store/boss.store'
import { bossService } from '../services/boss.service'
import { open, save } from '@tauri-apps/plugin-dialog'

export function BossList() {
  const navigate = useNavigate()
  const { bosses, loading, deleteBoss } = useBossStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [importing, setImporting] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [showSearchPopover, setShowSearchPopover] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  // const [loadingFromServer, setLoadingFromServer] = useState(false)
  
  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    // No auto-load
  }, [])

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchPopover(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const filteredBosses = bosses.filter(boss => 
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.AssetName.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Pagination calculations
  const totalPages = Math.ceil(filteredBosses.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedBosses = filteredBosses.slice(startIndex, endIndex)
  
  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])
  
  // Show search suggestions when typing
  const searchSuggestions = searchTerm.length >= 3 
    ? bosses.filter(boss => 
        boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boss.AssetName.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 10) // Limit to 10 suggestions
    : []

  const handleEdit = (nameHash: string) => {
    navigate(`/bosses/${encodeURIComponent(nameHash)}`)
  }

  const handleDelete = async (nameHash: string) => {
    if (confirm('Are you sure you want to delete this boss?')) {
      deleteBoss(nameHash)
    }
  }

  const handleImport = async () => {
    try {
      setImporting(true)
      setMessage(null)

      const selected = await open({
        multiple: false,
        filters: [{
          name: 'JSON',
          extensions: ['json']
        }]
      })

      if (selected) {
        const importedBosses = await bossService.importBossesFile(selected as string)
        
        // Load into store
        useBossStore.getState().bosses = importedBosses
        useBossStore.setState({ bosses: importedBosses })
        
        setMessage({
          type: 'success',
          text: `Successfully imported ${importedBosses.length} bosses`
        })
        
        // Clear message after 3 seconds
        setTimeout(() => setMessage(null), 3000)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to import bosses'
      console.error('Import error details:', error)
      
      setMessage({
        type: 'error',
        text: errorMessage
      })
      
      // Show alert with full error details
      if (errorMessage.includes('Field values:')) {
        // Detailed conversion error
        const parts = errorMessage.split('\n')
        alert(`Import Error:\n\n${parts.join('\n')}\n\nThe file appears to be in an older format. Please check the console for more details.`)
      } else if (errorMessage.includes('line') && errorMessage.includes('column')) {
        // Parse error with location info
        alert(`JSON Parse Error:\n\n${errorMessage}\n\nPlease check your Bosses.json file format.`)
      } else {
        alert(`Import Error:\n\n${errorMessage}`)
      }
      
      setTimeout(() => setMessage(null), 10000) // Keep error visible longer
    } finally {
      setImporting(false)
    }
  }

  const handleExport = async () => {
    try {
      setExporting(true)
      setMessage(null)

      const filePath = await save({
        defaultPath: 'Bosses.json',
        filters: [{
          name: 'JSON',
          extensions: ['json']
        }]
      })

      if (filePath) {
        await bossService.exportBossesFile(filePath, bosses)
        
        setMessage({
          type: 'success',
          text: `Successfully exported ${bosses.length} bosses`
        })
        
        // Clear message after 3 seconds
        setTimeout(() => setMessage(null), 3000)
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to export bosses'
      })
      setTimeout(() => setMessage(null), 5000)
    } finally {
      setExporting(false)
    }
  }

  // const handleLoadFromServer = async () => {
  //   try {
  //     setLoadingFromServer(true)
  //     setMessage(null)
  //     console.log('Loading bosses from server...')
      
  //     await loadBosses()
      
  //     setMessage({
  //       type: 'success',
  //       text: `Successfully loaded ${useBossStore.getState().bosses.length} bosses from server`
  //     })
      
  //     setTimeout(() => setMessage(null), 3000)
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Failed to load bosses from server'
  //     console.error('Load from server error:', error)
      
  //     setMessage({
  //       type: 'error',
  //       text: errorMessage
  //     })
      
  //     // Show detailed error
  //     if (errorMessage.includes('line') && errorMessage.includes('column')) {
  //       alert(`JSON Parse Error:\n\n${errorMessage}\n\nPlease check your server's Bosses.json file format.`)
  //     }
      
  //     setTimeout(() => setMessage(null), 10000)
  //   } finally {
  //     setLoadingFromServer(false)
  //   }
  // }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Boss Manager</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleImport}
            disabled={importing}
          >
            <Upload className="mr-2 h-4 w-4" />
            {importing ? 'Importing...' : 'Import'}
          </Button>
          <Button
            variant="outline"
            onClick={handleExport}
            disabled={exporting || bosses.length === 0}
          >
            <Download className="mr-2 h-4 w-4" />
            {exporting ? 'Exporting...' : 'Export'}
          </Button>
          <Link to="/bosses/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Boss
            </Button>
          </Link>
        </div>
      </div>

      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
          {message.type === 'error' ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        <div className="relative flex-1" ref={searchContainerRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search bosses... (type 3+ characters)"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setShowSearchPopover(e.target.value.length >= 3)
              }}
              onFocus={() => {
                if (searchTerm.length >= 3) {
                  setShowSearchPopover(true)
                }
              }}
            />
          </div>
          
          {showSearchPopover && searchSuggestions.length > 0 && (
            <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-md">
              <div className="max-h-[300px] overflow-y-auto">
                <div className="p-1">
                  {searchSuggestions.map((boss) => (
                    <button
                      key={boss.nameHash}
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                      onMouseDown={(e) => {
                        e.preventDefault() // Prevenir que el input pierda el foco
                        setSearchTerm(boss.name)
                        setShowSearchPopover(false)
                      }}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{boss.name}</span>
                        <span className="text-xs text-muted-foreground">{boss.AssetName}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="text-left p-4 font-medium">Level</th>
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium">Schedule</th>
              <th className="text-center p-4 font-medium">Items</th>
              <th className="text-center p-4 font-medium">Abilities</th>
              <th className="text-center p-4 font-medium">Mechanics</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBosses.length === 0 ? (
              <tr>
                <td className="p-8" colSpan={7}>
                  <div className="text-center py-8">
                    <div className="text-muted-foreground mb-4">
                      {searchTerm 
                        ? 'No bosses found matching your search.' 
                        : 'No bosses configured yet.'}
                    </div>
                    {!searchTerm && (
                      <div className="space-y-2 text-sm">
                        <p>Get started by:</p>
                        <div className="flex gap-4 justify-center">
                          <Link to="/bosses/new" className="text-primary hover:underline">
                            Creating a new boss
                          </Link>
                          <span className="text-muted-foreground">or</span>
                          <button 
                            onClick={handleImport}
                            className="text-primary hover:underline"
                          >
                            Importing existing configuration
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedBosses.map((boss) => {
                // Count total items
                const totalItems = boss.items?.length || 0
                
                // Count ability swaps
                const abilitySwapCount = boss.AbilitySwaps ? Object.keys(boss.AbilitySwaps).length : 0
                
                // Count mechanics
                const mechanicsCount = boss.Mechanics?.length || 0
                
                return (
                  <tr key={boss.nameHash} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 text-center font-medium">{boss.level}</td>
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{boss.name}</div>
                        <div className="text-xs text-muted-foreground">{boss.AssetName}</div>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{boss.Hour}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
                        totalItems > 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {totalItems}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
                        abilitySwapCount > 0 ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {abilitySwapCount}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
                        mechanicsCount > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {mechanicsCount}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(boss.nameHash)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={() => handleDelete(boss.nameHash)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredBosses.length)} of {filteredBosses.length} bosses
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {/* Show page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  // Show first page, last page, current page, and pages around current
                  return page === 1 || 
                         page === totalPages || 
                         Math.abs(page - currentPage) <= 1
                })
                .map((page, index, array) => {
                  // Add ellipsis if there's a gap
                  const showEllipsis = index > 0 && page - array[index - 1] > 1
                  
                  return (
                    <div key={page} className="flex items-center">
                      {showEllipsis && (
                        <span className="px-2 text-muted-foreground">...</span>
                      )}
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="min-w-[2.25rem]"
                      >
                        {page}
                      </Button>
                    </div>
                  )
                })
              }
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
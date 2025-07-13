import { Link } from 'react-router-dom'
import { Sword, Settings, Clock } from 'lucide-react'
import { useBossStore } from '../store/boss.store'

export function Dashboard() {
  const { bosses } = useBossStore()
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">BloodyBoss Configuration Tool</h1>
        <p className="text-muted-foreground mt-2">
          Manage your V Rising boss encounters with ease
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          Currently configured: <span className="font-medium text-foreground">{bosses.length} bosses</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/bosses">
          <div className="border rounded-lg p-6 hover:bg-accent transition-colors cursor-pointer">
            <Sword className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Boss Manager</h3>
            <p className="text-sm text-muted-foreground">
              Create, edit, and manage boss encounters
            </p>
          </div>
        </Link>

        <Link to="/config">
          <div className="border rounded-lg p-6 hover:bg-accent transition-colors cursor-pointer">
            <Settings className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">General Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure global mod settings
            </p>
          </div>
        </Link>

        <Link to="/mechanics">
          <div className="border rounded-lg p-6 hover:bg-accent transition-colors cursor-pointer">
            <Clock className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Mechanics Library</h3>
            <p className="text-sm text-muted-foreground">
              Browse and configure boss mechanics
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
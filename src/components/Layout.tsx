import { Link, Outlet, useLocation } from 'react-router-dom'
import { cn } from '../utils/cn'
import { Home, Sword, Settings, Wrench, Coffee } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Bosses', href: '/bosses', icon: Sword },
  { name: 'Settings', href: '/config', icon: Settings },
  { name: 'Doc. Mechanics', href: '/mechanics', icon: Wrench },
]

export function Layout() {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-background">
      <nav className="w-64 border-r bg-card relative">
        <div className="p-6">
          <h2 className="text-lg font-semibold">BloodyBoss Config</h2>
        </div>
        <div className="space-y-1 px-3 pb-20">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== '/' && location.pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="absolute bottom-0 w-full p-3 border-t">
          <a
            href="https://ko-fi.com/K3K8ENRQY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all bg-yellow-50/50 text-yellow-800 border border-yellow-200/40 hover:bg-yellow-100/60 hover:border-yellow-300/50 hover:text-yellow-900"
          >
            <Coffee className="h-4 w-4" />
            Support on Ko-fi
          </a>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
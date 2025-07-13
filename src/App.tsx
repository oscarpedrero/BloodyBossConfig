import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { BossList } from './pages/BossList'
import { BossNew } from './pages/BossNew'
import { BossEdit } from './pages/BossEdit'
import { Mechanics } from './pages/Mechanics'
import { SettingsPage } from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bosses" element={<BossList />} />
          <Route path="bosses/new" element={<BossNew />} />
          <Route path="bosses/:nameHash" element={<BossEdit />} />
          <Route path="mechanics" element={<Mechanics />} />
          <Route path="config" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RealBossForm } from '../components/RealBossForm'
import { useBossStore } from '../store/boss.store'
import { BossEncounter } from '../types'
import { Button } from '../components/ui/button'

export function BossEdit() {
  const { nameHash: encodedNameHash } = useParams<{ nameHash: string }>()
  const nameHash = encodedNameHash ? decodeURIComponent(encodedNameHash) : undefined
  const navigate = useNavigate()
  const { bosses, updateBoss, selectBoss } = useBossStore()

  useEffect(() => {
    if (nameHash) {
      selectBoss(nameHash)
    }
    return () => {
      // Only clear on unmount, not on nameHash change
      selectBoss(null)
    }
  }, [nameHash, selectBoss])

  const handleSubmit = async (data: BossEncounter) => {
    if (nameHash) {
      updateBoss(nameHash, data)
      navigate('/bosses')
    }
  }

  const handleCancel = () => {
    navigate('/bosses')
  }

  // Find the boss directly from the store
  const boss = nameHash ? bosses.find(b => b.nameHash === nameHash) : null

  if (!boss) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Boss not found</p>
          <Button onClick={() => navigate('/bosses')}>Back to Boss List</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Boss: {boss.name}</h1>
      <RealBossForm 
        boss={boss} 
        onSubmit={handleSubmit} 
        onCancel={handleCancel} 
      />
    </div>
  )
}
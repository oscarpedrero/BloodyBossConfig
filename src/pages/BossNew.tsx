import { useNavigate } from 'react-router-dom'
import { RealBossForm } from '../components/RealBossForm'
import { useBossStore } from '../store/boss.store'
import { BossEncounter } from '../types'

export function BossNew() {
  const navigate = useNavigate()
  const { addBoss } = useBossStore()

  const handleSubmit = async (data: BossEncounter) => {
    addBoss(data)
    navigate('/bosses')
  }

  const handleCancel = () => {
    navigate('/bosses')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Boss</h1>
      <RealBossForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}
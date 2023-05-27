import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/items'

interface EquipmentsSortByStatusProps {
  className?: string
  value: string
  onChange: (tab: TabItem) => void
}

export const EquipmentsSortByStatus = (props: EquipmentsSortByStatusProps) => {
  const { className, onChange, value } = props

  return (
    <Tabs
      className={className}
      tabs={items}
      value={value}
      onChange={onChange}
    />
  )
}

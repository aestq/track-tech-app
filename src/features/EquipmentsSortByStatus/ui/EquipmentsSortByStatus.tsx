import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/items'
import { type SortByStatus } from '../model/types/SortByStatus'

interface EquipmentsSortByStatusProps {
  className?: string
  value: SortByStatus
  onChange: (tab: TabItem<SortByStatus>) => void
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

import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/items'
import { type SortByRoom } from '../model/types/SortByRoom'

interface EquipmentsSortByRoomProps {
  className?: string
  value: SortByRoom
  onChange: (tab: TabItem) => void
}

export const EquipmentsSortByRoom = (props: EquipmentsSortByRoomProps) => {
  const { className, value, onChange } = props

  return (
    <Tabs
     className={className}
     tabs={items}
     value={value}
     onChange={onChange}
   />
  )
}

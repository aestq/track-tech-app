import { type EquipmentStatus } from 'entities/Equipment'
import { type TabItem } from 'shared/ui/Tabs/Tabs'

export const EquipmentStatusText: Record<EquipmentStatus, string> = {
  discarded: 'Списано',
  use: 'Эксплуатируется'
}

export const items: Array<TabItem<EquipmentStatus>> = [
  {
    content: EquipmentStatusText.use,
    value: 'use'
  },
  {
    content: EquipmentStatusText.discarded,
    value: 'discarded'
  }
]

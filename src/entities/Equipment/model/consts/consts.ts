import { type TabItem } from 'shared/ui/Tabs/Tabs'

export const EquipmentStatus: Record<string, string> = {
  discarded: 'Списано',
  use: 'Эксплуатируется'
}

export const items: TabItem[] = [
  {
    content: EquipmentStatus.use,
    value: 'use'
  },
  {
    content: EquipmentStatus.discarded,
    value: 'disable'
  }
]

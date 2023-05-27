import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { SortByStatus } from './types/sort'

export const items: TabItem[] = [
  {
    value: SortByStatus.ALL,
    content: 'Всё'
  },
  {
    value: SortByStatus.USE,
    content: 'Эксплуатируется'
  },
  {
    value: SortByStatus.DISCARDED,
    content: 'Списано'
  }
]

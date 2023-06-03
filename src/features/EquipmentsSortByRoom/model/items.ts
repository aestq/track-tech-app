import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { SortByRoom } from './types/SortByRoom'

export const items: Array<TabItem<SortByRoom>> = [
  {
    value: SortByRoom.ALL,
    content: 'Всё'
  },
  {
    value: SortByRoom.ONE,
    content: '100'
  },
  {
    value: SortByRoom.TWO,
    content: '200'
  },
  {
    value: SortByRoom.THREE,
    content: '300'
  },
  {
    value: SortByRoom.FOUR,
    content: '400'
  },
  {
    value: SortByRoom.FIVE,
    content: '500'
  }
]

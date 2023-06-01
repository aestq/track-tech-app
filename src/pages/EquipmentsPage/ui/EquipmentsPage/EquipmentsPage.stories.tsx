import type { Meta, StoryObj } from '@storybook/react'
import { SortByRoom } from 'features/EquipmentsSortByRoom'
import { SortByStatus } from 'features/EquipmentsSortByStatus'
import { type Equipment } from 'entities/Equipment'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import EquipmentsPage from './EquipmentsPage'

const data: Equipment[] = [
  { id: 1, name: 'Стол', stockNumber: '12345678', status: 'use', room: '100', specifications: 'Высота: ...' },
  { id: 2, name: 'Шкаф', stockNumber: '12345678', status: 'use', room: '100', specifications: 'Высота: 2м' },
  { id: 3, name: 'Ноутбук', stockNumber: '12345678', status: 'discarded', room: '200', specifications: 'ОЗУ: ...' }
]

const meta: Meta<typeof EquipmentsPage> = {
  title: 'pages/EquipmentsPage',
  component: EquipmentsPage
}

type Story = StoryObj<typeof EquipmentsPage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    equipments: {
      data,
      room: SortByRoom.ALL,
      status: SortByStatus.ALL,
      search: '',
      isLoading: false
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    equipments: {
      data,
      room: SortByRoom.ALL,
      status: SortByStatus.ALL,
      search: '',
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    equipments: {
      data,
      room: SortByRoom.ALL,
      status: SortByStatus.ALL,
      search: '',
      isLoading: false,
      error: 'error'
    }
  })]
}

export const Empty: Story = {
  decorators: [StoreDecorator({
    equipments: {
      data: [],
      room: SortByRoom.ALL,
      status: SortByStatus.ALL,
      search: '',
      isLoading: false
    }
  })]
}

export default meta

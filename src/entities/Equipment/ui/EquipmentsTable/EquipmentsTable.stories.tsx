import type { Meta, StoryObj } from '@storybook/react'
import { EquipmentsTable } from './EquipmentsTable'

const meta: Meta<typeof EquipmentsTable> = {
  title: 'entities/Equipments/EquipmentsTable',
  component: EquipmentsTable
}

type Story = StoryObj<typeof EquipmentsTable>

export const Primary: Story = {
  args: {
    items: [
      { id: 1, name: 'Стол', stockNumber: '12345678', status: 'use', room: '100', specifications: 'Высота: ...' },
      { id: 2, name: 'Шкаф', stockNumber: '12345678', status: 'use', room: '100', specifications: 'Высота: 2м' },
      { id: 3, name: 'Ноутбук', stockNumber: '12345678', status: 'discarded', room: '200', specifications: 'ОЗУ: ...' }
    ]
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}

export const Empty: Story = {
  args: {
    items: []
  }
}

export default meta

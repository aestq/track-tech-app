import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { SortByRoom } from '../model/types/SortByRoom'
import { EquipmentsSortByRoom } from './EquipmentsSortByRoom'

const meta: Meta<typeof EquipmentsSortByRoom> = {
  title: 'features/EquipmentsSortByRoom',
  component: EquipmentsSortByRoom
}

type Story = StoryObj<typeof EquipmentsSortByRoom>

export const Primary: Story = {
  args: {
    value: SortByRoom.ONE,
    onChange: action('onChange')
  }
}

export default meta

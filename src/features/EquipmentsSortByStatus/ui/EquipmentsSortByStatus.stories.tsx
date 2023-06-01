import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { SortByStatus } from '../model/types/SortByStatus'
import { EquipmentsSortByStatus } from './EquipmentsSortByStatus'

const meta: Meta<typeof EquipmentsSortByStatus> = {
  title: 'features/EquipmentsSortByStatus',
  component: EquipmentsSortByStatus
}

type Story = StoryObj<typeof EquipmentsSortByStatus>

export const Primary: Story = {
  args: {
    value: SortByStatus.ALL,
    onChange: action('onChange')
  }
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import { EquipmentForm } from './EquipmentForm'

const meta: Meta<typeof EquipmentForm> = {
  title: 'entities/Equipments/EquipmentForm',
  component: EquipmentForm
}

type Story = StoryObj<typeof EquipmentForm>

export const Primary: Story = {}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import AddEquipmentForm from './AddEquipmentForm'

const meta: Meta<typeof AddEquipmentForm> = {
  title: 'slice/AddEquipmentForm',
  component: AddEquipmentForm
}

type Story = StoryObj<typeof AddEquipmentForm>

export const Primary: Story = {}

export default meta

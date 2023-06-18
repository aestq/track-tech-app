import type { Meta, StoryObj } from '@storybook/react'
import AddRoomForm from './AddRoomForm'

const meta: Meta<typeof AddRoomForm> = {
  title: 'slice/AddRoomForm',
  component: AddRoomForm
}

type Story = StoryObj<typeof AddRoomForm>

export const Primary: Story = {}

export default meta

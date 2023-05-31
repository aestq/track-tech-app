import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar
}

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    size: 50
  }
}

export default meta

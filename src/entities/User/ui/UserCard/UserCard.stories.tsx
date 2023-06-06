import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard'

const meta: Meta<typeof UserCard> = {
  title: 'slice/UserCard',
  component: UserCard
}

type Story = StoryObj<typeof UserCard>

export const Primary: Story = {}

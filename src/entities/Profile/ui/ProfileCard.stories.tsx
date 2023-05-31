import type { Meta, StoryObj } from '@storybook/react'
import { type User } from 'entities/User'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ProfileCard } from './ProfileCard'

const userData: User = {
  id: 1,
  name: 'Имя',
  roles: []
}

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard
}

type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
  decorators: [StoreDecorator({
    user: { userData }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    user: { userData },
    profileCard: { isLoading: true }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    user: { userData },
    profileCard: { isLoading: false, error: 'error' }
  })]
}

export default meta

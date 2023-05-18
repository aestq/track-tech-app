import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { type User } from '../model/types/UserSchema'
import { UserCard } from './UserCard'

const userData: User = {
  name: 'Имя пользователя',
  id: 1,
  roles: []
}

const meta: Meta<typeof UserCard> = {
  title: 'entities/UserCard',
  component: UserCard
}

type Story = StoryObj<typeof UserCard>

export const Primary: Story = {
  decorators: [StoreDecorator({
    user: { userData }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    user: { userData, isLoading: true }
  })]
}

export default meta

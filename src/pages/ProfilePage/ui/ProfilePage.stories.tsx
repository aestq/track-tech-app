import type { Meta, StoryObj } from '@storybook/react'
import { type User } from 'entities/User'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import ProfilePage from './ProfilePage'

const userData: User = {
  id: 1,
  name: 'Имя',
  roles: []
}

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage
}

type Story = StoryObj<typeof ProfilePage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    user: { userData },
    profileCard: { isLoading: false }
  })]
}

export default meta

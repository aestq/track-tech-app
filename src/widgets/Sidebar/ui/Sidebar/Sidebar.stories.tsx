import type { Meta, StoryObj } from '@storybook/react'
import { type User } from 'entities/User'
import { UserRoles } from 'entities/User'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Sidebar } from './Sidebar'

const userData: User = {
  id: 1,
  name: 'Имя',
  roles: []
}

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar
}

type Story = StoryObj<typeof Sidebar>

export const Primary: Story = {
  decorators: [StoreDecorator({
    user: { userData }
  })]
}

export const Admin: Story = {
  decorators: [StoreDecorator({
    user: { userData: { ...userData, roles: [UserRoles.ADMIN] } }
  })]
}

export default meta

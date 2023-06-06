import type { Meta, StoryObj } from '@storybook/react'
import { UserListAdminPage } from './UserListAdminPage'

const meta: Meta<typeof UserListAdminPage> = {
  title: 'slice/UserListAdminPage',
  component: UserListAdminPage
}

type Story = StoryObj<typeof UserListAdminPage>

export const Primary: Story = {}

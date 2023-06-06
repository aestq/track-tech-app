import type { Meta, StoryObj } from '@storybook/react'
import { UserList } from './UserList'

const meta: Meta<typeof UserList> = {
  title: 'slice/UserList',
  component: UserList
}

type Story = StoryObj<typeof UserList>

export const Primary: Story = {}

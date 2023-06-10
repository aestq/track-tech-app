import type { Meta, StoryObj } from '@storybook/react'
import { AdminPageUserList } from './AdminPageUserList'

const meta: Meta<typeof AdminPageUserList> = {
  title: 'slice/AdminPageUserList',
  component: AdminPageUserList
}

type Story = StoryObj<typeof AdminPageUserList>

export const Primary: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import AdminPage from './AdminPage'

const meta: Meta<typeof AdminPage> = {
  title: 'pages/AdminPage',
  component: AdminPage
}

type Story = StoryObj<typeof AdminPage>

export const Primary: Story = {}

export default meta

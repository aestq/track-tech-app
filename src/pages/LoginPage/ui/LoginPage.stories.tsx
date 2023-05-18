import type { Meta, StoryObj } from '@storybook/react'
import LoginPage from './LoginPage'

const meta: Meta<typeof LoginPage> = {
  title: 'pages/LoginPage',
  component: LoginPage
}

type Story = StoryObj<typeof LoginPage>

export const Primary: Story = {}

export default meta

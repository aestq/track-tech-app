import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import LoginPage from './LoginPage'

const meta: Meta<typeof LoginPage> = {
  title: 'pages/LoginPage',
  component: LoginPage
}

type Story = StoryObj<typeof LoginPage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      login: 'login',
      password: '12345678',
      isLoading: false
    }
  })]
}

export default meta

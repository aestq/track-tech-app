import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm
}

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      login: '',
      password: ''
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      login: '',
      password: '',
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      login: '',
      password: '',
      error: 'Неверный пароль'
    }
  })]
}

export default meta

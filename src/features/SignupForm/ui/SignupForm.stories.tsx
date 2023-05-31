import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { SignupForm } from './SignupForm'

const meta: Meta<typeof SignupForm> = {
  title: 'features/SignupForm',
  component: SignupForm
}

type Story = StoryObj<typeof SignupForm>

export const Primary: Story = {
  decorators: [StoreDecorator({
    signupForm: {
      name: '',
      login: '',
      password: '',
      isLoading: false
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    signupForm: {
      name: '',
      login: '',
      password: '',
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    signupForm: {
      name: '',
      login: '',
      password: '',
      isLoading: false,
      error: 'Ошибка'
    }
  })]
}

export default meta

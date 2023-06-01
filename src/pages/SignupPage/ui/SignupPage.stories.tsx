import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import SignupPage from './SignupPage'

const meta: Meta<typeof SignupPage> = {
  title: 'pages/SignupPage',
  component: SignupPage
}

type Story = StoryObj<typeof SignupPage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    signupForm: {
      login: '',
      name: '',
      password: '',
      isLoading: false
    }
  })]
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import { AuthLayout } from './AuthLayout'

const meta: Meta<typeof AuthLayout> = {
  title: 'widgets/AuthLayout',
  component: AuthLayout
}

type Story = StoryObj<typeof AuthLayout>

export const Primary: Story = {
  args: {
    children: 'Форма логина или регистрации'
  }
}

export default meta

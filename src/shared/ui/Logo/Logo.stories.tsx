import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'shared/Logo',
  component: Logo
}

type Story = StoryObj<typeof Logo>

export const Size_m: Story = {
  args: {
    size: 'm'
  }
}

export const Size_xl: Story = {
  args: {
    size: 'xl'
  }
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    theme: 'primary',
    children: 'Кнопка'
  }
}

export const Clear: Story = {
  args: {
    theme: 'clear',
    children: 'Кнопка'
  }
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: 'Кнопка'
  }
}

export const Size_s: Story = {
  args: {
    size: 's',
    children: 'Кнопка'
  }
}

export const Size_m: Story = {
  args: {
    size: 'm',
    children: 'Кнопка'
  }
}

export const Size_l: Story = {
  args: {
    size: 'l',
    children: 'Кнопка'
  }
}

export default meta

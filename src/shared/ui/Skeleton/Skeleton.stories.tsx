import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton
}

type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  args: {
    height: 100,
    width: 200
  }
}

export const WithCustomRadius: Story = {
  args: {
    height: 120,
    width: 200,
    radius: 30
  }
}

export default meta

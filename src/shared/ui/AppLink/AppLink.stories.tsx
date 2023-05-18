import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
}

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'Ссылка'
  }
}

export default meta

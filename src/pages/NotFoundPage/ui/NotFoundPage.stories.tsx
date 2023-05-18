import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
}

type Story = StoryObj<typeof NotFoundPage>

export const Primary: Story = {}

export default meta

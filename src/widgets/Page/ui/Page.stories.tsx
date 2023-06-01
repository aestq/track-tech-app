import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page
}

type Story = StoryObj<typeof Page>

export const Primary: Story = {
  args: {
    children: 'Какой-либо контент'
  }
}

export const WithTitle: Story = {
  args: {
    title: 'Какой-либо заголовок',
    children: 'Какой-либо контент'
  }
}

export default meta

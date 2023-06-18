import type { Meta, StoryObj } from '@storybook/react'
import { HistoryItem } from './HistoryItem'

const meta: Meta<typeof HistoryItem> = {
  title: 'slice/HistoryItem',
  component: HistoryItem
}

type Story = StoryObj<typeof HistoryItem>

export const Primary: Story = {}

export default meta

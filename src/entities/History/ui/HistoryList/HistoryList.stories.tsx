import type { Meta, StoryObj } from '@storybook/react'
import { HistoryList } from './HistoryList'

const meta: Meta<typeof HistoryList> = {
  title: 'slice/HistoryList',
  component: HistoryList
}

type Story = StoryObj<typeof HistoryList>

export const Primary: Story = {}

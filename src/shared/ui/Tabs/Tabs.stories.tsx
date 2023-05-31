import type { Meta, StoryObj } from '@storybook/react'
import { type TabItem, Tabs } from './Tabs'

const items: TabItem[] = [
  { value: '1', content: 'Tab 1' },
  { value: '2', content: 'Tab 2' },
  { value: '3', content: 'Tab 3' }
]

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs
}

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    tabs: items,
    value: items[0].value,
    onChange: () => {}
  }
}

export default meta

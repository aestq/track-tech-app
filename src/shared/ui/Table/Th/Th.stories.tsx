import type { Meta, StoryObj } from '@storybook/react'
import { Th } from './Th'

const meta: Meta<typeof Th> = {
  title: 'shared/Table/Th',
  component: Th
}

type Story = StoryObj<typeof Th>

export const Primary: Story = {
  args: {
    children: 'Столбец 1'
  }
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import { Td } from './Td'

const meta: Meta<typeof Td> = {
  title: 'shared/Table/Td',
  component: Td
}

type Story = StoryObj<typeof Td>

export const Primary: Story = {
  args: {
    children: 'Контент 1'
  }
}

export default meta

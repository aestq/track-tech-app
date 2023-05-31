import type { Meta, StoryObj } from '@storybook/react'
import { Td } from 'shared/ui/Table'
import { Tr } from './Tr'

const meta: Meta<typeof Tr> = {
  title: 'shared/Table/Tr',
  component: Tr
}

type Story = StoryObj<typeof Tr>

export const Primary: Story = {
  render: () => (
    <Tr>
      <Td>Контент</Td>
      <Td>Контент</Td>
      <Td>Контент</Td>
    </Tr>
  )
}

export default meta

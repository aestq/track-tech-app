import type { Meta, StoryObj } from '@storybook/react'
import { Td, Th, Tr } from 'shared/ui/Table'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'shared/Table/Table',
  component: Table
}

type Story = StoryObj<typeof Table>

export const Primary: Story = {
  render: () => (
    <Table>
      <Tr>
        <Th>Столбец 1</Th>
        <Th>Столбец 2</Th>
        <Th>Столбец 3</Th>
      </Tr>
      <Tr>
        <Td>Контент 1</Td>
        <Td>Контент 2</Td>
        <Td>Контент 3</Td>
      </Tr>
      <Tr>
        <Td>Контент 1</Td>
        <Td>Контент 2</Td>
        <Td>Контент 3</Td>
      </Tr>
    </Table>
  )
}

export default meta

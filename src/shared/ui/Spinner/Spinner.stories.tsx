import type { Meta, StoryObj } from '@storybook/react'
import { Card } from 'shared/ui/Card/Card'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'shared/Spinner',
  component: Spinner
}

type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {
    theme: 'primary'
  }
}

export const Background: Story = {
  args: {
    theme: 'background'
  },
  render: (args) => (
    <Card>
      <Spinner {...args} />
    </Card>
  )
}

export const Size_S: Story = {
  args: {
    size: 's'
  }
}

export const Size_M: Story = {
  args: {
    size: 'm'
  }
}

export const Size_L: Story = {
  args: {
    size: 'l'
  }
}

export default meta

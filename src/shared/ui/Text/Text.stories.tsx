import type { Meta, StoryObj } from '@storybook/react'
import { Card } from 'shared/ui/Card/Card'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text
}

type Story = StoryObj<typeof Text>

export const OnlyTitle: Story = {
  args: {
    title: 'Заголовок'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Текст'
  }
}

export const Error: Story = {
  args: {
    theme: 'error',
    text: 'Текст'
  }
}

export const Background: Story = {
  args: {
    theme: 'background',
    text: 'Текст'
  },
  render: (args) => (
    <Card>
      <Text
        {...args}
      />
    </Card>
  )
}

export const Size_xs: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
    size: 'xs'
  }
}

export const Size_s: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
    size: 's'
  }
}

export const Size_m: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
    size: 'm'
  }
}

export const Size_l: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
    size: 'l'
  }
}

export const Size_xl: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
    size: 'xl'
  }
}

export const Left: Story = {
  args: {
    text: 'Текст',
    align: 'left'
  }
}

export const Center: Story = {
  args: {
    text: 'Текст',
    align: 'center'
  }
}

export const Right: Story = {
  args: {
    text: 'Текст',
    align: 'right'
  }
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input
}

type Story = StoryObj<typeof Input>

export const Secondary: Story = {
  args: {
    placeholder: 'Placeholder'
  }
}

export const Label: Story = {
  args: {
    label: 'Введите значение',
    placeholder: 'Placeholder'
  }
}

export const ValidateError: Story = {
  args: {
    label: 'Введите значение',
    placeholder: 'Placeholder',
    validateError: 'Некорректное значение'
  }
}

export default meta

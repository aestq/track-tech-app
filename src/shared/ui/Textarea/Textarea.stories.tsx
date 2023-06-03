import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'shared/Textarea',
  component: Textarea
}

type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args: {
    placeholder: 'placeholder'
  }
}

export const Label: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder'
  }
}

export const ValidateError: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
    validateError: 'validate error'
  }
}

export default meta

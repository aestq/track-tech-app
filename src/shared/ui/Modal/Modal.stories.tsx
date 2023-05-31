import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal
}

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Контент'
  }
}

export const WithTitle: Story = {
  args: {
    isOpen: true,
    title: 'Модальное окно',
    children: 'Контент'
  }
}

export default meta

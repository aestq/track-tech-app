import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { RoomsList } from './RoomsList'

const meta: Meta<typeof RoomsList> = {
  title: 'entities/RoomList',
  component: RoomsList
}

type Story = StoryObj<typeof RoomsList>

export const Primary: Story = {
  decorators: [StoreDecorator({
    room: {
      data: [
        { id: 1, number: '100' },
        { id: 2, number: '200' },
        { id: 3, number: '300' }
      ],
      isLoading: false
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    room: { isLoading: true }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    room: { isLoading: false, error: 'error' }
  })]
}

export const Empty: Story = {
  decorators: [StoreDecorator({
    room: { isLoading: false, data: [] }
  })]
}

export default meta

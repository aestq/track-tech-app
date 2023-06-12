import type { Meta, StoryObj } from '@storybook/react'
import { type Room } from 'entities/Room'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import RoomsPage from'./RoomsPage'

const data: Room[] = [
  { id: 1, number: '100' },
  { id: 2, number: '200' },
  { id: 3, number: '300' }
]

const meta: Meta<typeof RoomsPage> = {
  title: 'pages/RoomsPage',
  component: RoomsPage
}

type Story = StoryObj<typeof RoomsPage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    room: {
      data,
      isLoading: false
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    room: {
      data,
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    room: {
      data,
      isLoading: false,
      error: 'error'
    }
  })]
}

export const Empty: Story = {
  decorators: [StoreDecorator({
    room: {
      data: [],
      isLoading: false
    }
  })]
}

export default meta

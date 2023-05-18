import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/Store'

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>) =>
  (StoryComponent: StoryFn) => {
    return (
      <StoreProvider initialState={initialState}>
        <StoryComponent />
      </StoreProvider>
    )
  }

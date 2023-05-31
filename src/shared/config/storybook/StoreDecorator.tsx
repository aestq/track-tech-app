import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/Store'
import { loginReducer } from 'features/LoginForm/model/slice/loginSlice'
import { signupReducer } from 'features/SignupForm/model/slice/signupSlice'
import { type ReducersList } from 'shared/lib/hooks/useReducersLoader'

const asyncReducers: ReducersList = {
  loginForm: loginReducer,
  signupForm: signupReducer
}

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>) =>
  (StoryComponent: StoryFn) => {
    return (
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }

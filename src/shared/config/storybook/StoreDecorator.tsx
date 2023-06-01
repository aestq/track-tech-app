import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/Store'
import { equipmentsReducer } from 'pages/EquipmentsPage/model/slice/equipmentsSlice'
import { loginReducer } from 'features/LoginForm/model/slice/loginSlice'
import { signupReducer } from 'features/SignupForm/model/slice/signupSlice'
import { profileCardReducer } from 'entities/Profile/model/slice/ProfileCardSlice'
import { roomReducer } from 'entities/Room/model/slice/roomSlice'
import { type ReducersList } from 'shared/lib/hooks/useReducersLoader'

const asyncReducers: ReducersList = {
  loginForm: loginReducer,
  signupForm: signupReducer,
  profileCard: profileCardReducer,
  room: roomReducer,
  equipments: equipmentsReducer
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

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loginReducer } from 'features/LoginForm'
import { signupReducer } from 'features/SignupForm'
import { equipmentReducer } from 'entities/Equipment'
import { roomReducer } from 'entities/Room'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { type StateSchema } from '../config/StateSchema'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer = combineReducers<StateSchema>({
    user: userReducer,
    loginForm: loginReducer,
    signupForm: signupReducer,
    equipment: equipmentReducer,
    room: roomReducer
  })

  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api
          }
        }
      })
    )
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

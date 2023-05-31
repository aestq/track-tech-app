import { type DeepPartial } from '@reduxjs/toolkit'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from 'app/providers/Store'
import { type ReducersList } from 'shared/lib/hooks/useReducersLoader'
import { createReduxStore } from '../config/createReduxStore'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: ReducersList
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props
  const store = createReduxStore(initialState as StateSchema, asyncReducers)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

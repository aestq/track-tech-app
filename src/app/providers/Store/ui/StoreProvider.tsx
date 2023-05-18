import { type DeepPartial } from '@reduxjs/toolkit'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from 'app/providers/Store'
import { createReduxStore } from '../config/createReduxStore'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props
  const store = createReduxStore(initialState as StateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

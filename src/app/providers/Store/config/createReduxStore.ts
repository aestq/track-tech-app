import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { createReducerManager } from '../config/reducerManager'
import { type StateSchema } from '../config/StateSchema'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  }
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/Store'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface Options {
  reducersList: ReducersList
  removeAfterUnmount?: boolean
}

export const useReducersLoader = (options: Options) => {
  const { reducersList, removeAfterUnmount } = options
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducersList).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${key} reducer` })
    })

    if(removeAfterUnmount) {
      return () => {
        Object.entries(reducersList).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey)
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
  }, [dispatch, reducersList, store.reducerManager, removeAfterUnmount])
}

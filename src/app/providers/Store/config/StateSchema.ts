import {
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
  type AnyAction,
  type EnhancedStore
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type LoginSchema } from 'features/LoginForm'
import { type SignupSchema } from 'features/SignupForm'
import { type EquipmentSchema } from 'entities/Equipment'
import { type RoomSchema } from 'entities/Room'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  signupForm?: SignupSchema
  equipment?: EquipmentSchema
  room?: RoomSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

interface ExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  extra: ExtraArgs
  rejectValue: T
  state: StateSchema
}

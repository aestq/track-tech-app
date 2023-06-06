import {
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
  type AnyAction,
  type EnhancedStore
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type AdminSchema } from 'pages/AdminPage'
import { type EquipmentsSchema } from 'pages/EquipmentsPage'
import { type AddEquipmentSchema } from 'features/AddEquipment'
import { type EditEquipmentSchema } from 'features/EditEquipment'
import { type LoginSchema } from 'features/LoginForm'
import { type SignupSchema } from 'features/SignupForm'
import { type ProfileCardSchema } from 'entities/Profile'
import { type RoomSchema } from 'entities/Room'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  signupForm?: SignupSchema
  profileCard?: ProfileCardSchema
  equipments?: EquipmentsSchema
  room?: RoomSchema
  addEquipment?: AddEquipmentSchema
  editEquipment?: EditEquipmentSchema
  admin?: AdminSchema
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

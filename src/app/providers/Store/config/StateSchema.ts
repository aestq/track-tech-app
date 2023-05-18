import { type AxiosInstance } from 'axios'
import { type LoginSchema } from 'features/LoginForm'
import { type SignupSchema } from 'features/SignupForm'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
  user: UserSchema
  loginForm: LoginSchema
  signupForm: SignupSchema
}

interface ExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  extra: ExtraArgs
  rejectValue: T
  state: StateSchema
}

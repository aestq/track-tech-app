import { type StateSchema } from 'app/providers/Store'

export const getLoginFormError = (state: StateSchema) => state.loginForm?.error

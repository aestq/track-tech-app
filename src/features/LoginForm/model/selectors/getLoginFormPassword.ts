import { type StateSchema } from 'app/providers/Store'

export const getLoginFormPassword = (state: StateSchema) => state.loginForm.password

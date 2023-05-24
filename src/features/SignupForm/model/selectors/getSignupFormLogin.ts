import { type StateSchema } from 'app/providers/Store'

export const getSignupFormLogin = (state: StateSchema) => state.signupForm?.login ?? ''

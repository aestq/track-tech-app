import { type StateSchema } from 'app/providers/Store'

export const getSignupError = (state: StateSchema) => state.signupForm?.error

import { type StateSchema } from 'app/providers/Store'

export const getSignupFormPassword = (state: StateSchema) => state.signupForm?.password ?? ''

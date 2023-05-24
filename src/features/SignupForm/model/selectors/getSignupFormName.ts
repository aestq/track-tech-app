import { type StateSchema } from 'app/providers/Store'

export const getSignupFormName = (state: StateSchema) => state.signupForm?.name ?? ''

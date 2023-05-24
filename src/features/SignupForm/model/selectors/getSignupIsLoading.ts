import { type StateSchema } from 'app/providers/Store'

export const getSignupIsLoading = (state: StateSchema) => state.signupForm?.isLoading

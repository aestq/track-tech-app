import { type StateSchema } from 'app/providers/Store'

export const getLoginFormIsLoading = (state: StateSchema) => state.loginForm.isLoading

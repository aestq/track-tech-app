import { type StateSchema } from 'app/providers/Store'

export const getUserIsLoading = (state: StateSchema) => state.user.isLoading

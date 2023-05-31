import { type StateSchema } from 'app/providers/Store'

export const getProfileCardIsLoading = (state: StateSchema) => state.profileCard?.isLoading

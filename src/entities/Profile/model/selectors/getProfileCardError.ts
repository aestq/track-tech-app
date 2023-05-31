import { type StateSchema } from 'app/providers/Store'

export const getProfileCardError = (state: StateSchema) => state.profileCard?.error

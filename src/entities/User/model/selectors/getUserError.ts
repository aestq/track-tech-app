import { type StateSchema } from 'app/providers/Store'

export const getUserError = (state: StateSchema) => state.user.error

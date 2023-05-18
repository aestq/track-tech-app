import { type StateSchema } from 'app/providers/Store'

export const getUserData = (state: StateSchema) => state.user.userData

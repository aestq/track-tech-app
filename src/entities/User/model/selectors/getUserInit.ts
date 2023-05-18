import { type StateSchema } from 'app/providers/Store'

export const getUserInit = (state: StateSchema) => state.user._init

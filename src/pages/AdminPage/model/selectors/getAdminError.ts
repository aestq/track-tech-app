import { type StateSchema } from 'app/providers/Store'

export const getAdminError = (state: StateSchema) => state.admin?.error

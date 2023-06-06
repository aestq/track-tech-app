import { type StateSchema } from 'app/providers/Store'

export const getAdminSearch = (state: StateSchema) => state.admin?.search ?? ''

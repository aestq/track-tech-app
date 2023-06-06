import { type StateSchema } from 'app/providers/Store'

export const getAdminData = (state: StateSchema) => state.admin?.data

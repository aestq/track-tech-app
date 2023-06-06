import { type StateSchema } from 'app/providers/Store'

export const getAdminIsLoading = (state: StateSchema) => state.admin?.isLoading

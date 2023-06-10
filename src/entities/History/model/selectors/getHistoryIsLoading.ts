import { type StateSchema } from 'app/providers/Store'

export const getHistoryIsLoading = (state: StateSchema) => state.history?.isLoading

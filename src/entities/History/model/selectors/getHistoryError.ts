import { type StateSchema } from 'app/providers/Store'

export const getHistoryError = (state: StateSchema) => state.history?.error

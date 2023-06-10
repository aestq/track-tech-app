import { type StateSchema } from 'app/providers/Store'

export const getHistoryData = (state: StateSchema) => state.history?.data

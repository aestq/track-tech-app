import { type StateSchema } from 'app/providers/Store'

export const getRoomIsLoading = (state: StateSchema) => state.room?.isLoading

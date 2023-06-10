import { type StateSchema } from 'app/providers/Store'

export const getAddRoomIsLoading = (state: StateSchema) => state.addRoom?.isLoading

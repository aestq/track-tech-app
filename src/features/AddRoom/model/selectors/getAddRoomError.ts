import { type StateSchema } from 'app/providers/Store'

export const getAddRoomError = (state: StateSchema) => state.addRoom?.error

import { type StateSchema } from 'app/providers/Store'

export const getRoomError = (state: StateSchema) => state.room.error

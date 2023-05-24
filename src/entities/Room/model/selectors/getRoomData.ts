import { type StateSchema } from 'app/providers/Store'

export const getRoomData = (state: StateSchema) => state.room.data

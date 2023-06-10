import { type StateSchema } from 'app/providers/Store'

export const getAddRoomNumber = (state: StateSchema) => state.addRoom?.number ?? ''

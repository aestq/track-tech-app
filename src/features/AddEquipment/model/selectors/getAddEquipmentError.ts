import { type StateSchema } from 'app/providers/Store'

export const getAddEquipmentError = (state: StateSchema) => state.addEquipment?.error

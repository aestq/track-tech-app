import { type StateSchema } from 'app/providers/Store'

export const getEditEquipmentError = (state: StateSchema) => state.editEquipment?.error

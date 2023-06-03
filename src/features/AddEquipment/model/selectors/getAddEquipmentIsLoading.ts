import { type StateSchema } from 'app/providers/Store'

export const getAddEquipmentIsLoading = (state: StateSchema) => state.addEquipment?.isLoading

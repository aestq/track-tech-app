import { type StateSchema } from 'app/providers/Store'

export const getEditEquipmentIsLoading = (state: StateSchema) => state.editEquipment?.isLoading

import { type StateSchema } from 'app/providers/Store'

export const getAddEquipmentFormData = (state: StateSchema) => state.addEquipment?.formData

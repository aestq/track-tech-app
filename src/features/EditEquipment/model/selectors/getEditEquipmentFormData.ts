import { type StateSchema } from 'app/providers/Store'

export const getEditEquipmentFormData = (state: StateSchema) => state.editEquipment?.formData

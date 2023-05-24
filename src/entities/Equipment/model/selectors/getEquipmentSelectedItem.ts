import { type StateSchema } from 'app/providers/Store'

export const getEquipmentSelectedItem = (state: StateSchema) => state.equipment?.selectedItem

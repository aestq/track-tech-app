import { type StateSchema } from 'app/providers/Store'

export const getEquipmentIsOpen = (state: StateSchema) => state.equipment?.isOpen

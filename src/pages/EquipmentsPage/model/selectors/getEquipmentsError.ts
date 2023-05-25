import { type StateSchema } from 'app/providers/Store'

export const getEquipmentsError = (state: StateSchema) => state.equipments?.error

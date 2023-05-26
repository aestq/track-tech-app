import { type StateSchema } from 'app/providers/Store'

export const getEquipmentsSearch = (state: StateSchema) => state.equipments?.search ?? ''

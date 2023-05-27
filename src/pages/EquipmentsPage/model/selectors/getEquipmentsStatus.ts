import { type StateSchema } from 'app/providers/Store'

export const getEquipmentsStatus = (state: StateSchema) => state.equipments?.status ?? ''

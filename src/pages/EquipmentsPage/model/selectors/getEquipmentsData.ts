import { type StateSchema } from 'app/providers/Store'

export const getEquipmentsData = (state: StateSchema) => state.equipments?.data

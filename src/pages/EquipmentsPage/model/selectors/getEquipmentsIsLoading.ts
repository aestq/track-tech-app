import { type StateSchema } from 'app/providers/Store'

export const getEquipmentsIsLoading = (state: StateSchema) => state.equipments?.isLoading

import { type StateSchema } from 'app/providers/Store'
import { SortByStatus } from 'features/EquipmentsSortByStatus'

export const getEquipmentsStatus = (state: StateSchema) => state.equipments?.status ?? SortByStatus.ALL

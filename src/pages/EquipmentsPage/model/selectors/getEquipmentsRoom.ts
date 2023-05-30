import { type StateSchema } from 'app/providers/Store'
import { SortByRoom } from 'features/EquipmentsSortByRoom'

export const getEquipmentsRoom = (state: StateSchema) => state.equipments?.room ?? SortByRoom.ALL

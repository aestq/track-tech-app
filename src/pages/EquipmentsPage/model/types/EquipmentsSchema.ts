import { type SortByRoom } from 'features/EquipmentsSortByRoom'
import { type SortByStatus } from 'features/EquipmentsSortByStatus'
import { type Equipment } from 'entities/Equipment'

export interface EquipmentsSchema {
  data?: Equipment[]
  status: SortByStatus
  search: string
  room: SortByRoom
  isLoading: boolean
  error?: string
}

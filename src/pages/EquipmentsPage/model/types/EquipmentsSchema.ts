import { type SortByStatus } from 'features/EquipmentsSortByStatus'
import { type Equipment } from 'entities/Equipment'

export interface EquipmentsSchema {
  selectedItem?: Equipment
  data?: Equipment[]
  status: SortByStatus
  isOpen: boolean
  search: string
  isLoading: boolean
  error?: string
}

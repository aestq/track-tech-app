import { type Equipment } from 'entities/Equipment'

export interface EquipmentsSchema {
  selectedItem?: Equipment
  data?: Equipment[]
  isOpen: boolean
  search: string
  isLoading: boolean
  error?: string
}

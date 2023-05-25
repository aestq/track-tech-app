import { type Equipment } from 'entities/Equipment'

export interface EquipmentsSchema {
  selectedItem?: Equipment
  data?: Equipment[]
  isOpen: boolean
  isLoading: boolean
  error?: string
}

import { type Equipment } from 'entities/Equipment'

export interface EditEquipmentSchema {
  formData?: Equipment
  isLoading: boolean
  error?: string
  init: boolean
}

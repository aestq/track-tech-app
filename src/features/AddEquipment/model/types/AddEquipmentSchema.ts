import { type Equipment } from 'entities/Equipment'

export interface AddEquipmentSchema {
  formData: Equipment
  isLoading: boolean
  error?: string
}

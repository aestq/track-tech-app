export type EquipmentStatus = 'use' | 'discarded'

export interface Equipment {
  id?: number
  name?: string
  stockNumber?: string
  status?: EquipmentStatus
  room?: string
  specifications?: string
}

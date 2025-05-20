import { type Room } from 'entities/Room'

export type EquipmentStatus = 'use' | 'discarded'

export interface Equipment {
    id: number
    name: string
    stockNumber: string
    status: EquipmentStatus
    room?: Room
    specifications: string
}

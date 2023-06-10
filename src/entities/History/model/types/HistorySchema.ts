import { type Equipment } from 'entities/Equipment'
import { type User } from 'entities/User'

export interface History {
  id: number
  from: string
  to: string
  createdAt: string
  time: string
  user: Omit<User, 'roles'>
  equipment: Omit<Equipment, 'specifications' | 'room' | 'status'>
}

export interface HistorySchema {
  data?: History[]
  isLoading: boolean
  error?: string
}

import { type User } from 'entities/User'

export interface AdminSchema {
  data?: User[]
  isLoading: boolean
  search: string
  error?: string
}

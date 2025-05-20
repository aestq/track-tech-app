import { type User } from 'entities/User'

interface HistoryUser extends User {
    login: string
}

export interface History {
    id: number
    data: string
    createdAt: string
    updatedAt: string
    user: Omit<HistoryUser, 'roles'>
}

export interface HistorySchema {
    data?: History[]
    isLoading: boolean
    error?: string
}

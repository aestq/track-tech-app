export interface Room {
    id: number
    number: number
}

export interface RoomSchema {
    data?: Room[]
    isLoading: boolean
    error?: string
}

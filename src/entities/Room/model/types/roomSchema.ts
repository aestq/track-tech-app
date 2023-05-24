export interface Room {
  id: number
  number: string
}

export interface RoomSchema {
  data?: Room[]
  isLoading: boolean
  error?: string
}

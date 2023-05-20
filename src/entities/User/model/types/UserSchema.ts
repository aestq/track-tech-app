export enum UserRoles {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN'
}

export interface User {
  id: number
  name: string
  roles: UserRoles[]
}

export interface UserData {
  user: User
  accessToken: string
}

export interface UserSchema {
  userData?: User
  isLoading: boolean
  error?: string
  _init: boolean
}

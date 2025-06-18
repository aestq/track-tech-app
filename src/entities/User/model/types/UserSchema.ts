export enum UserRoles {
    USER = 'USER',
    MODERATOR = 'MODERATOR',
    ADMIN = 'ADMIN',
}

export interface User {
    id: number
    name: string
    login: string
    roles: UserRoles[]
}

export interface UserData {
    accessToken: string
    refreshToken: string
}

export interface UserSchema {
    userData?: User
    _init: boolean
}

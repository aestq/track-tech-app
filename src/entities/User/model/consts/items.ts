import { type SelectItem } from 'shared/ui/Select/Select'
import { UserRoles } from '../types/UserSchema'

export const items: Array<SelectItem<UserRoles>> = [
  {
    value: UserRoles.USER,
    content: 'User'
  },
  {
    value: UserRoles.MODERATOR,
    content: 'Moderator'
  },
  {
    value: UserRoles.ADMIN,
    content: 'Admin'
  }
]

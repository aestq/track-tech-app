import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/Store'
import { UserRoles } from 'entities/User/model/types/UserSchema'

const getUserRoles = (state: StateSchema) => state.user.userData?.roles

export const getUserIsModerator = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.MODERATOR)))

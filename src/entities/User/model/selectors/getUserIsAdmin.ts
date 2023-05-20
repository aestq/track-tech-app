import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/Store'
import { UserRoles } from 'entities/User/model/types/UserSchema'

const getUserRoles = (state: StateSchema) => state.user.userData?.roles

export const getUserIsAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.ADMIN)))

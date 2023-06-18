import { createSelector } from '@reduxjs/toolkit'
import { getUserData, getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { getPrivateRoutes } from './getPrivateRoutes'
import { getPublicRoutes } from './getPublicRoutes'

export const getRoutes = createSelector(
  getUserData, getUserIsAdmin, getUserIsModerator,
  (userData, isAdmin, isModerator) => {
    if(userData) {
      return getPrivateRoutes(isAdmin, isModerator)
    }

    return getPublicRoutes()
  })

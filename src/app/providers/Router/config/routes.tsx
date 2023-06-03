import { createSelector } from '@reduxjs/toolkit'
import { getPrivateRoutes } from 'app/providers/Router/config/getPrivateRoutes'
import { getPublicRoutes } from 'app/providers/Router/config/getPublicRoutes'
import { getUserData, getUserIsAdmin, getUserIsModerator } from 'entities/User'

export const getRoutes = createSelector(
  getUserData, getUserIsAdmin, getUserIsModerator,
  (userData, isAdmin, isModerator) => {
    if(userData) {
      return getPrivateRoutes(isAdmin, isModerator)
    }

    return getPublicRoutes()
  })

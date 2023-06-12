import { createSelector } from '@reduxjs/toolkit'
import { getUserData, getUserInit, getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { getPrivateRoutes } from './getPrivateRoutes'
import { getPublicRoutes } from './getPublicRoutes'

export const getRoutes = createSelector(
  getUserData, getUserIsAdmin, getUserIsModerator, getUserInit,
  (userData, isAdmin, isModerator, init) => {
    if(userData) {
      return getPrivateRoutes(isAdmin, isModerator)
    }

    if(!init) {
      return []
    }

    return getPublicRoutes()
  })

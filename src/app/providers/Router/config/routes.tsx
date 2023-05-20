import { createSelector } from '@reduxjs/toolkit'
import { getPrivateRoutes } from 'app/providers/Router/config/getPrivateRoutes'
import { getPublicRoutes } from 'app/providers/Router/config/getPublicRoutes'
import { getUserData, getUserIsAdmin } from 'entities/User'

export const getRoutes = createSelector(getUserData, getUserIsAdmin, (userData, isAdmin) => {
  if(userData) {
    return getPrivateRoutes(isAdmin)
  }

  return getPublicRoutes()
})

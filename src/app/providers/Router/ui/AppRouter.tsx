import { Suspense, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { getUserData, getUserInit } from 'entities/User'
import { privateRoutes } from '../config/privateRoutes'
import { publicRoutes } from '../config/publicRoutes'

export const AppRouter = () => {
  const userData = useSelector(getUserData)
  const userInit = useSelector(getUserInit)

  const render = useCallback((route: RouteProps) => (
    <Route
      path={route.path}
      element={route.element}
      key={route.path}
    />
  ), [])

  if(!userInit) {
    return <PageLoader />
  }

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {userData ? privateRoutes.map(render) : publicRoutes.map(render)}
      </Routes>
    </Suspense>
  )
}

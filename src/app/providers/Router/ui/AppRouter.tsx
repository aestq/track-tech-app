import { Suspense, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInit } from 'entities/User'
import { getRoutes } from '../config/routes'

export const AppRouter = () => {
  const routes = useSelector(getRoutes)
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
        {routes.map(render)}
      </Routes>
    </Suspense>
  )
}

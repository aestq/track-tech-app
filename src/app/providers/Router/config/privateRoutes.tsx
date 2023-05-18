import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const privateRoutes: RouteProps[] = [
  {
    path: RoutePaths.HOME,
    element: <HomePage />
  }
]

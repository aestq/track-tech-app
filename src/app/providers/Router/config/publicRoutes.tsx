import { type RouteProps } from 'react-router-dom'
import { EntryPage } from 'pages/EntryPage'
import { LoginPage } from 'pages/LoginPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { SignupPage } from 'pages/SignupPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const publicRoutes: RouteProps[] = [
  {
    path: RoutePaths.LOGIN,
    element: <LoginPage />
  },
  {
    path: RoutePaths.ENTRY,
    element: <EntryPage />
  },
  {
    path: RoutePaths.SING_UP,
    element: <SignupPage />
  }
]

import { EntryPage } from 'pages/EntryPage'
import { LoginPage } from 'pages/LoginPage'
import { SignupPage } from 'pages/SignupPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getPublicRoutes = () => (
  [
    {
      path: RoutePaths.ENTRY,
      element: <EntryPage />
    },
    {
      path: RoutePaths.SING_UP,
      element: <SignupPage />
    },
    {
      path: RoutePaths.LOGIN,
      element: <LoginPage />
    }
  ]
)

import { AdminPage } from 'pages/AdminPage'
import { HistoryPage } from 'pages/HistoryPage'
import { HomePage } from 'pages/HomePage'
import { ProfilePage } from 'pages/ProfilePage'
import { RoomsPage } from 'pages/RoomsPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getPrivateRoutes = (isAdmin: boolean) => {
  const privateRoutes = [
    {
      path: RoutePaths.HOME,
      element: <HomePage />
    },
    {
      path: RoutePaths.ROOMS,
      element: <RoomsPage />
    },
    {
      path: RoutePaths.HISTORY,
      element: <HistoryPage />
    },
    {
      path: RoutePaths.PROFILE,
      element: <ProfilePage />
    }
  ]

  if(isAdmin) {
    privateRoutes.push({
      path: RoutePaths.ADMIN,
      element: <AdminPage />
    })
  }

  return privateRoutes
}

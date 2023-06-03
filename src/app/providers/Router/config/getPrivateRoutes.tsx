import { AdminPage } from 'pages/AdminPage'
import { EquipmentsPage } from 'pages/EquipmentsPage'
import { HistoryPage } from 'pages/HistoryPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RoomsPage } from 'pages/RoomsPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getPrivateRoutes = (isAdmin: boolean) => {
  const privateRoutes = [
    {
      path: RoutePaths.EQUIPMENTS,
      element: <EquipmentsPage />
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
    privateRoutes.push(
      {
        path: RoutePaths.ADMIN,
        element: <AdminPage />
      }
    )
  }

  return privateRoutes
}

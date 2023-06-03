import { type RouteProps } from 'react-router-dom'
import { AdminPage } from 'pages/AdminPage'
import { EquipmentDetailsPage } from 'pages/EquipmentDetailsPage'
import { EquipmentsPage } from 'pages/EquipmentsPage'
import { HistoryPage } from 'pages/HistoryPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RoomsPage } from 'pages/RoomsPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getPrivateRoutes = (isAdmin: boolean, isModerator: boolean) => {
  const privateRoutes: RouteProps[] = [
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

  if(isModerator || isAdmin) {
    privateRoutes.push(
      {
        path: RoutePaths.EQUIPMENTS + '/:id',
        element: <EquipmentDetailsPage />
      }
    )
  }

  return privateRoutes
}

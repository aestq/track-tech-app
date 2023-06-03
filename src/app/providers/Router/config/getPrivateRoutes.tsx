import { AdminPage } from 'pages/AdminPage'
import { EquipmentCreatePage } from 'pages/EquipmentCreatePage'
import { EquipmentsPage } from 'pages/EquipmentsPage'
import { HistoryPage } from 'pages/HistoryPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RoomsPage } from 'pages/RoomsPage'
import { getRouteEquipmentCreate, RoutePaths } from 'shared/config/routeConfig/RoutePaths'

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
      },
      {
        // @ts-expect-error
        path: `${RoutePaths.EQUIPMENTS}/${getRouteEquipmentCreate()}`,
        element: <EquipmentCreatePage />
      }
    )
  }

  return privateRoutes
}

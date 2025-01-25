import { type RouteProps } from 'react-router-dom'
import { AdminPage } from 'pages/AdminPage'
import { EquipmentCreatePage } from 'pages/EquipmentCreatePage'
import { EquipmentsPage } from 'pages/EquipmentsPage'
import { HistoryPage } from 'pages/HistoryPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RoomsPage } from 'pages/RoomsPage'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getPrivateRoutes = (isAdmin: boolean, isModerator: boolean) => {
    const privateRoutes: RouteProps[] = [
        {
            path: RoutePaths.EQUIPMENTS,
            element: <EquipmentsPage />,
        },
        {
            path: RoutePaths.ROOMS,
            element: <RoomsPage />,
        },
        {
            path: RoutePaths.HISTORY,
            element: <HistoryPage />,
        },
        {
            path: RoutePaths.PROFILE,
            element: <ProfilePage />,
        },
        // {
        //   path: RoutePaths.NOT_FOUND,
        //   element: <NotFoundPage />
        // }
    ]

    if (isAdmin) {
        privateRoutes.push(
            {
                path: RoutePaths.ADMIN,
                element: <AdminPage />,
            },
            {
                path: RoutePaths.EQUIPMENTS_CREATE,
                element: <EquipmentCreatePage />,
            }
        )
    }

    return privateRoutes
}

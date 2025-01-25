import { Suspense } from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from 'app/providers/Router/ui/PrivateRoute'
import { PublicRoute } from 'app/providers/Router/ui/PublicRoute'
import { AdminPage } from 'pages/AdminPage'
import { EntryPage } from 'pages/EntryPage'
import { EquipmentsPage } from 'pages/EquipmentsPage'
import { HistoryPage } from 'pages/HistoryPage'
import { LoginPage } from 'pages/LoginPage'
import { RoomsPage } from 'pages/RoomsPage'
import { SignupPage } from 'pages/SignupPage'
import { PageLoader } from 'widgets/PageLoader'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { MainLayout } from 'shared/layouts/MainLayout'

export const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        ),
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        element: <MainLayout />,
                        children: [
                            {
                                path: RoutePaths.EQUIPMENTS,
                                element: <EquipmentsPage />,
                            },

                            {
                                path: RoutePaths.HISTORY,
                                element: <HistoryPage />,
                            },
                            {
                                path: RoutePaths.ROOMS,
                                element: <RoomsPage />,
                            },
                            {
                                path: RoutePaths.ADMIN,
                                element: <AdminPage />,
                            },
                        ],
                    },
                ],
            },
            {
                element: <PublicRoute />,
                children: [
                    {
                        path: RoutePaths.ENTRY,
                        element: <EntryPage />,
                    },
                    {
                        path: RoutePaths.SING_UP,
                        element: <SignupPage />,
                    },
                    {
                        path: RoutePaths.LOGIN,
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
])

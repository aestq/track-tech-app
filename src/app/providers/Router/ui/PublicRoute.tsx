import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUserData } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const PublicRoute = () => {
    const userData = useSelector(getUserData)

    if (userData) {
        return <Navigate replace to={RoutePaths.EQUIPMENTS} />
    }

    return <Outlet />
}

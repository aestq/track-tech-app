import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/providers/Router/config/router'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInit } from 'entities/User'

export const AppRouter = () => {
    const userInit = useSelector(getUserInit)

    if (!userInit) {
        return <PageLoader />
    }

    return <RouterProvider router={router}></RouterProvider>
}

import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { AppRouter } from 'app/providers/Router'
import { Sidebar } from 'widgets/Sidebar'
import { getUserData, refreshUser } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Toaster } from 'shared/ui/redesign/sonner'

export const App = () => {
    const dispatch = useAppDispatch()
    const userData = useSelector(getUserData)

    useInitialEffect(() => {
        dispatch(refreshUser())
    })

    return <AppRouter />
}

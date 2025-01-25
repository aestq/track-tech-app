import { useSelector } from 'react-redux'
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

    if (userData) {
        return (
            <div className="grid grid-cols-1 h-screen">
                <main className="flex max-w-7xl grid-cols-[250px,1fr] w-full justify-self-center gap-5">
                    <Sidebar />
                    <AppRouter />
                    <Toaster />
                </main>
            </div>
        )
    }

    return (
        <>
            <AppRouter />
            <Toaster />
        </>
    )
}

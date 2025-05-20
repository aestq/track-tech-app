import { AppRouter } from 'app/providers/Router'
import { refreshUser } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'

export const App = () => {
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(refreshUser())
    })

    return <AppRouter />
}

import { useEffect } from 'react'
import { AppRouter } from 'app/providers/Router'
import { refreshService } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(refreshService())
  }, [dispatch])

  return <AppRouter />
}

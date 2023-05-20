import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppRouter } from 'app/providers/Router'
import { Sidebar } from 'widgets/Sidebar'
import { getUserData, refreshService } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export const App = () => {
  const dispatch = useAppDispatch()
  const userData = useSelector(getUserData)

  useEffect(() => {
    dispatch(refreshService())
  }, [dispatch])

  if(userData) {
    return (
      <main className='content-page'>
        <Sidebar />
        <AppRouter />
      </main>
    )
  }

  return <AppRouter />
}

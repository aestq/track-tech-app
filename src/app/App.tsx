import { useSelector } from 'react-redux'
import { AppRouter } from 'app/providers/Router'
import { Sidebar } from 'widgets/Sidebar'
import { getUserData, refreshService } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'

export const App = () => {
  const dispatch = useAppDispatch()
  const userData = useSelector(getUserData)

  useInitialEffect(() => {
    dispatch(refreshService())
  })

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

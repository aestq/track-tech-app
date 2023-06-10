import { Page } from 'widgets/Page'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { fetchUsers } from '../../model/services/fetchUsers'
import { adminReducer } from '../../model/slice/adminSlice'
import { AdminPageFilters } from '../AdminPageFilters/AdminPageFilters'
import { AdminPageUserList } from '../AdminPageUserList/AdminPageUserList'

const reducersList: ReducersList = {
  admin: adminReducer
}

const AdminPage = () => {
  useReducersLoader({ reducersList })
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchUsers())
  })

  return (
    <Page title='Админ'>
      <AdminPageFilters />
      <AdminPageUserList />
    </Page>
  )
}

export default AdminPage

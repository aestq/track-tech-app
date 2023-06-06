import { Page } from 'widgets/Page'
import { AdminPageFilters } from '../AdminPageFilters/AdminPageFilters'
import { UserListAdminPage } from '../UserListAdminPage/UserListAdminPage'

const AdminPage = () => {
  return (
    <Page title='Админ'>
      <AdminPageFilters />
      <UserListAdminPage />
    </Page>
  )
}

export default AdminPage

import { Page } from 'widgets/Page'
import { RoomsList } from 'entities/Room'
import { RoomsPageHeader } from '../RoomsPageHeader/RoomsPageHeader'

const RoomsPage = () => {
  return (
    <Page title='Кабинеты'>
      <RoomsPageHeader />
      <RoomsList />
    </Page>
  )
}

export default RoomsPage

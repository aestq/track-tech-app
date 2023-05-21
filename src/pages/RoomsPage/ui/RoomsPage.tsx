import { Page } from 'widgets/Page'
import { RoomsList } from 'entities/Room'

export const RoomsPage = () => {
  return (
    <Page title='Кабинеты'>
      <RoomsList />
    </Page>
  )
}

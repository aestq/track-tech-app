import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Page } from 'widgets/Page'
import { AddRoomModal } from 'features/AddRoom'
import { RoomsList } from 'entities/Room'
import { getUserIsAdmin } from 'entities/User'
import { Button } from 'shared/ui/Button/Button'
import cls from './RoomsPage.module.scss'

const RoomsPage = () => {
  const isAdmin = useSelector(getUserIsAdmin)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Page title='Кабинеты'>
      {isAdmin && (
        <header className={cls.header}>
          <Button onClick={openModal}>
            Создать
          </Button>
        </header>
      )}
      <RoomsList />
      <AddRoomModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </Page>
  )
}

export default RoomsPage

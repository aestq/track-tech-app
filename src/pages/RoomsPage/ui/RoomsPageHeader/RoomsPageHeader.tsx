import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddRoomModal } from 'features/AddRoom'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './RoomsPageHeader.module.scss'

interface RoomsPageHeaderProps {
  className?: string
}

export const RoomsPageHeader = memo((props: RoomsPageHeaderProps) => {
  const { className } = props
  const isAdmin = useSelector(getUserIsAdmin)
  const [isOpenAddRoom, setIsOpenAddRoom] = useState(false)

  const openAddRoom = useCallback(() => {
    setIsOpenAddRoom(true)
  }, [])

  const closeAddRoom = useCallback(() => {
    setIsOpenAddRoom(false)
  }, [])

  if(!isAdmin) {
    return null
  }

  return (
    <header className={classNames(cls.RoomsPageHeader, {}, [className])}>
      <Button
        className={cls.addRoom}
        onClick={openAddRoom}
        size='s'
      >
        Создать
      </Button>
      <AddRoomModal
        isOpen={isOpenAddRoom}
        onClose={closeAddRoom}
      />
    </header>
  )
})

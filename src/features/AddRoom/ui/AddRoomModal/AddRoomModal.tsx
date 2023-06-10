import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getUserIsAdmin } from 'entities/User'
import { Modal } from 'shared/ui/Modal/Modal'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AddRoomFormAsync } from '../AddRoomForm/AddRoomForm.async'
import cls from './AddRoomModal.module.scss'

interface AddRoomModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddRoomModal = (props: AddRoomModalProps) => {
  const { isOpen, onClose } = props
  const isAdmin = useSelector(getUserIsAdmin)

  if(!isAdmin) {
    return null
  }

  const fallback = (
    <div className={cls.skeletons}>
      <div>
        <Skeleton className={cls.label} width={100} height={17} radius={3} />
        <Skeleton width={350} height={37} radius={5} />
      </div>
      <Skeleton width={350} height={37} radius={5} />
    </div>
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Создание кабинета'
      lazy
    >
      <Suspense fallback={fallback}>
        <AddRoomFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}

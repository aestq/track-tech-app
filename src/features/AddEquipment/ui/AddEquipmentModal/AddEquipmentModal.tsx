import { memo, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { AddEquipmentFormAsync } from '../AddEquipmentForm/AddEquipmentForm.async'
import cls from './AddEquipmentModal.module.scss'

interface AddEquipmentModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AddEquipmentModal = memo((props: AddEquipmentModalProps) => {
  const { className, isOpen, onClose } = props
  const isAdmin = useSelector(getUserIsAdmin)

  if(!isAdmin) {
    return null
  }

  const fallback = (
    <div className={cls.spinner}>
      <Spinner />
    </div>
  )

  return (
    <Modal
      className={classNames(cls.Modal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      title='Создание оборудования'
      lazy
    >
      <Suspense fallback={fallback}>
        <AddEquipmentFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
})

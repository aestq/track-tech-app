import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './SpecificationsModal.module.scss'

interface SpecificationsModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  specifications?: string
}

export const SpecificationsModal = memo((props: SpecificationsModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    specifications
  } = props

  return (
    <Modal
      className={classNames(cls.SpecificationsModal, {}, [className])}
      title='Характеристики'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={cls.content}>
        {specifications}
      </div>
    </Modal>
  )
})

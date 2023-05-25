import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './SpecificationsModal.module.scss'

interface SpecificationsModalProps {
  className?: string
}

export const SpecificationsModal = memo((props: SpecificationsModalProps) => {
  const { className } = props
  return (
    <Modal
      className={classNames(cls.SpecificationsModal, {}, [className])}
      title='Характеристики'
    >
      <div className={cls.content} />
    </Modal>
  )
})

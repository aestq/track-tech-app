import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getEquipmentIsOpen } from 'entities/Equipment/model/selectors/getEquipmentIsOpen'
import { getEquipmentSelectedItem } from 'entities/Equipment/model/selectors/getEquipmentSelectedItem'
import { equipmentActions } from 'entities/Equipment/model/slice/EquipmentSlice'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './SpecificationsModal.module.scss'

interface SpecificationsModalProps {
  className?: string
}

export const SpecificationsModal = memo((props: SpecificationsModalProps) => {
  const { className } = props
  const selectedItem = useSelector(getEquipmentSelectedItem)
  const isOpen = useSelector(getEquipmentIsOpen)
  const dispatch = useAppDispatch()

  const onClose = useCallback(() => {
    dispatch(equipmentActions.closeModal())
  }, [dispatch])

  return (
    <Modal
      className={classNames(cls.SpecificationsModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      title='Характеристики'
    >
      <div className={cls.content}>
        {selectedItem?.specifications}
      </div>
    </Modal>
  )
})

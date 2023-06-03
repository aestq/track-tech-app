import { memo, useCallback, useState } from 'react'
import { SpecificationsModal } from 'entities/Equipment/ui/SpecificationsModal'
import { classNames } from 'shared/lib/classNames/classNames'
import { Table, Th, Tr } from 'shared/ui/Table'
import { Text } from 'shared/ui/Text/Text'
import { type Equipment } from '../../model/types/Equipment'
import { EquipmentItem } from '../EquipmentItem/EquipmentItem'
import { EquipmentItemSkeleton } from '../EquipmentItem/EquipmentItemSkeleton'
import cls from './EquipmentsTable.module.scss'

interface EquipmentTableProps {
  className?: string
  items?: Equipment[]
  isLoading?: boolean
}

export const EquipmentsTable = memo((props: EquipmentTableProps) => {
  const {
    className,
    items,
    isLoading
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const [specifications, setSpecifications] = useState('')

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback((item: Equipment) => {
    setSpecifications(item?.specifications ?? '')
    setIsOpen(true)
  }, [])

  const render = useCallback((item: Equipment) => (
    <EquipmentItem
      item={item}
      key={item.id}
      onClick={onOpen}
    />
  ), [onOpen])

  if(isLoading) {
    return (
      <div className={cls.skeletons}>
        <EquipmentItemSkeleton />
        <EquipmentItemSkeleton />
        <EquipmentItemSkeleton />
        <EquipmentItemSkeleton />
        <EquipmentItemSkeleton />
      </div>
    )
  }

  if(!items?.length) {
    return (
      <Text
        className={cls.notFound}
        text='Оборудование не найдено'
      />
    )
  }

  return (
    <Table className={classNames(cls.EquipmentsTable, {}, [className])}>
      <Tr>
        <Th>Наименование</Th>
        <Th>Номер</Th>
        <Th>Статус</Th>
        <Th>Характеристики</Th>
        <Th>Кабинет</Th>
      </Tr>
      {items?.map(render)}
      <SpecificationsModal
        isOpen={isOpen}
        onClose={onClose}
        specifications={specifications}
      />
    </Table>
  )
})

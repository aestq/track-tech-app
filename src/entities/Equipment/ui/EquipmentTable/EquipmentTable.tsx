import { memo, useCallback } from 'react'
import { Table, Th, Tr } from 'shared/ui/Table'
import { Text } from 'shared/ui/Text/Text'
import { type Equipment } from '../../model/types/Equipment'
import { EquipmentItem } from '../EquipmentTableItem/EquipmentItem'
import { EquipmentItemSkeleton } from '../EquipmentTableItem/EquipmentItemSkeleton'
import cls from './EquipmentTable.module.scss'

interface EquipmentTableProps {
  className?: string
  items?: Equipment[]
  isLoading?: boolean
  error?: string
}

export const EquipmentTable = memo((props: EquipmentTableProps) => {
  const {
    className,
    items,
    isLoading,
    error
  } = props

  const render = useCallback((item: Equipment) => (
    <EquipmentItem
      item={item}
      key={item.id}
    />
  ), [])

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

  if(error) {
    return (
      <Text
        text='Произошла ошибка при подгрузке оборудования'
        theme='error'
      />
    )
  }

  if(!items?.length) {
    return (
      <Text
        className={cls.notFound}
        text='Ничего не найдено'
      />
    )
  }

  return (
    <Table className={className}>
      <Tr>
        <Th>Наименование</Th>
        <Th>Номер</Th>
        <Th>Статус</Th>
        <Th>Характеристики</Th>
        <Th>Кабинет</Th>
      </Tr>
      {items?.map(render)}
    </Table>
  )
})

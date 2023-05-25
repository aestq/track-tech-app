import { memo, useCallback } from 'react'
import { getArrayByLength } from 'shared/lib/helpers/getArrayByLength'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Table, Th, Tr } from 'shared/ui/Table'
import { Text } from 'shared/ui/Text/Text'
import { type Equipment } from '../../model/types/Equipment'
import { EquipmentTableItem } from '../EquipmentTableItem/EquipmentTableItem'
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
    <EquipmentTableItem
      item={item}
      key={item.id}
    />
  ), [])

  if(isLoading) {
    return (
      <div className={cls.skeletons}>
        {getArrayByLength(10).map((_, index) => (
          <Skeleton
            width='100%'
            height={50}
            radius={0}
            key={index}
          />
        ))}
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

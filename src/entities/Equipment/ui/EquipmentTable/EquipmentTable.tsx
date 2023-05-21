import { memo, useCallback } from 'react'
import { items } from 'entities/Equipment/model/items'
import { Table, Th, Tr } from 'shared/ui/Table'
import { type Equipment } from '../../model/types/equipment'
import { EquipmentTableItem } from '../EquipmentTableItem/EquipmentTableItem'
import { SpecificationsModal } from '../SpecificationsModal/SpecificationsModal'

interface EquipmentTableProps {
  className?: string
}

export const EquipmentTable = memo((props: EquipmentTableProps) => {
  const { className } = props

  const render = useCallback((item: Equipment) => (
    <EquipmentTableItem
      item={item}
      key={item.id}
    />
  ), [])

  return (
    <Table className={className}>
      <Tr>
        <Th>Наименование</Th>
        <Th>Номер</Th>
        <Th>Статус</Th>
        <Th>Характеристики</Th>
        <Th>Кабинет</Th>
      </Tr>
      {items.map(render)}
      <SpecificationsModal />
    </Table>
  )
})

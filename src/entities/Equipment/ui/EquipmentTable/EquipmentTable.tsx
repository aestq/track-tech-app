import { classNames } from 'shared/lib/classNames/classNames'
import { Table, Th, Tr } from 'shared/ui/Table'
import { type Equipment } from '../../model/types/equipment'
import { EquipmentTableItem } from '../EquipmentTableItem/EquipmentTableItem'
import cls from './EquipmentTable.module.scss'

interface EquipmentTableProps {
  className?: string
}

export const EquipmentTable = (props: EquipmentTableProps) => {
  const { className } = props

  const item: Equipment = {
    id: 1,
    name: 'Laptop',
    stockNumber: '234567',
    status: 'use',
    specifications: 'Поцессор: intel core i3; ОЗУ: 8 ГБ. Поцессор: intel core i3; ОЗУ: 8 ГБ. Поцессор: intel core i3; ОЗУ: 8 ГБ. ',
    room: '310'
  }

  return (
    <Table className={classNames(cls.EquipmentTable, {}, [className])}>
      <Tr>
        <Th>Наименование</Th>
        <Th>Номер</Th>
        <Th>Статус</Th>
        <Th>Характеристики</Th>
        <Th>Кабинет</Th>
      </Tr>
      <EquipmentTableItem item={item} />
      <EquipmentTableItem item={item} />
      <EquipmentTableItem item={item} />
      <EquipmentTableItem item={item} />
      <EquipmentTableItem item={item} />
    </Table>
  )
}

import { EquipmentStatus } from 'entities/Equipment/model/consts/consts'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Td, Tr } from 'shared/ui/Table'
import { type Equipment } from '../../model/types/equipment'
import cls from './EquipmentTableItem.module.scss'

interface EquipmentTableItemProps {
  className?: string
  item: Equipment
}

export const EquipmentTableItem = (props: EquipmentTableItemProps) => {
  const { className, item } = props

  return (
    <Tr className={classNames(cls.EquipmentTableItem, {}, [className])}>
      <Td>{item.name}</Td>
      <Td>{item.stockNumber}</Td>
      <Td>{EquipmentStatus[item.status]}</Td>
      <Td>
        <Button size='s'>
          Посмотреть
        </Button>
      </Td>
      <Td>{item.room}</Td>
    </Tr>
  )
}

import { memo, useCallback } from 'react'
import { EquipmentStatus } from 'entities/Equipment/model/consts/consts'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Td, Tr } from 'shared/ui/Table'
import { equipmentActions } from '../../model/slice/EquipmentSlice'
import { type Equipment } from '../../model/types/equipment'

interface EquipmentTableItemProps {
  className?: string
  item: Equipment
}

export const EquipmentTableItem = memo((props: EquipmentTableItemProps) => {
  const { className, item } = props
  const { id, name, stockNumber, status, room } = item
  const dispatch = useAppDispatch()

  const onClickButton = useCallback(() => {
    dispatch(equipmentActions.setSelectedItem(id))
  }, [dispatch, id])

  return (
    <Tr className={className}>
      <Td>{name}</Td>
      <Td>{stockNumber}</Td>
      <Td>{EquipmentStatus[status]}</Td>
      <Td>
        <Button
          size='s'
          onClick={onClickButton}
        >
          Посмотреть
        </Button>
      </Td>
      <Td>{room}</Td>
    </Tr>
  )
})

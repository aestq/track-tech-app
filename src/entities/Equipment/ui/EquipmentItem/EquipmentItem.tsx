import { memo, useCallback } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { Td, Tr } from 'shared/ui/Table'
import { EquipmentStatus } from '../../model/consts/consts'
import { type Equipment } from '../../model/types/Equipment'

interface EquipmentItemProps {
  className?: string
  item: Equipment
  onClick?: (item: Equipment) => void
}

export const EquipmentItem = memo((props: EquipmentItemProps) => {
  const { className, item, onClick } = props

  const onClickHandler = useCallback((item: Equipment) => {
    return () => {
      onClick?.(item)
    }
  }, [onClick])

  return (
    <Tr className={className}>
      <Td>{item.name}</Td>
      <Td>{item.stockNumber}</Td>
      <Td>{EquipmentStatus[item.status]}</Td>
      <Td>
        <Button
          size='s'
          onClick={onClickHandler(item)}
        >
          Посмотреть
        </Button>
      </Td>
      <Td>{item.room}</Td>
    </Tr>
  )
})

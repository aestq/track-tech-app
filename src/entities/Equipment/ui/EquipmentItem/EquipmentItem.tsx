import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { Td, Tr } from 'shared/ui/Table'
import { Text } from 'shared/ui/Text/Text'
import { EquipmentStatusText } from '../../model/consts/consts'
import { type Equipment } from '../../model/types/Equipment'

interface EquipmentItemProps {
  className?: string
  item: Equipment
  onClick?: (item: Equipment) => void
}

const getRoute = (id: number) => RoutePaths.EQUIPMENTS + String(id)

export const EquipmentItem = memo((props: EquipmentItemProps) => {
  const { className, item, onClick } = props
  const isAdmin = useSelector(getUserIsAdmin)
  const isModerator = useSelector(getUserIsModerator)
  let name

  const onClickHandler = useCallback((item: Equipment) => {
    return () => {
      onClick?.(item)
    }
  }, [onClick])

  if(!item?.id) {
    return null
  }

  if(isModerator || isAdmin) {
    name = (
      <AppLink
        to={getRoute(item.id)}
      >
        <Text
          text={item.name}
          align='center'
        />
      </AppLink>
    )
  } else {
    name = item.name
  }

  return (
    <Tr className={className}>
      <Td>{name}</Td>
      <Td>{item.stockNumber}</Td>
      <Td>{EquipmentStatusText[item?.status ?? 'use']}</Td>
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

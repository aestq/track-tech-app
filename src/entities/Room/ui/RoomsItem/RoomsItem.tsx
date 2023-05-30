import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { type Room } from '../../model/types/roomSchema'
import cls from './RoomsItem.module.scss'

interface RoomsItemProps {
  className?: string
  item: Room
}

export const RoomsItem = (props: RoomsItemProps) => {
  const { className, item } = props

  return (
    <AppLink
      className={cls.link}
      to={`${RoutePaths.ROOMS}/${item.id}`}
    >
      <Card
        className={classNames(cls.RoomsItem, {}, [className])}
        theme='border'
      >
        <Text
          title={item.number}
          align='center'
        />
        <Text
          text='Кабинет'
          size='s'
        />
      </Card>
    </AppLink>
  )
}

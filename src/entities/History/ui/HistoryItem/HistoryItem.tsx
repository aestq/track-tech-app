import { useSelector } from 'react-redux'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import ArrowIcon from 'shared/assets/icons/back-arrow.png'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { type History } from '../../model/types/HistorySchema'
import cls from './HistoryItem.module.scss'

interface HistoryItemProps {
  className?: string
  history: History
}

const getEquipmentRoute = (id: number) => RoutePaths.EQUIPMENTS + String(id)

export const HistoryItem = (props: HistoryItemProps) => {
  const { className, history } = props
  const isAdmin = useSelector(getUserIsAdmin)
  const isModerator = useSelector(getUserIsModerator)
  let name

  if(isModerator || isAdmin) {
    name = (
      <AppLink
        className={cls.link}
        to={getEquipmentRoute(history.equipment.id ?? 1)}
      >
        {history.equipment.name}
      </AppLink>
    )
  } else {
    name = (
      <Text
        text={history.equipment.name}
      />
    )
  }

  return (
    <Card
      className={classNames(cls.HistoryItem, {}, [className])}
      theme='secondary'
    >
      <div className={cls.info}>
        {name}
        <Text
          text={history.equipment.stockNumber}
          size='s'
        />
      </div>
      <div className={cls.history}>
        <div className={cls.moving}>
          <Text
            text={history.from}
          />
          <img
            className={cls.arrow}
            src={ArrowIcon}
            alt='arrow'
          />
          <Text
            text={history.to}
          />
        </div>
        <Text
          text={history.createdAt}
          size='s'
        />
      </div>
    </Card>
  )
}

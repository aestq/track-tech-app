import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { getUserData } from '../model/selectors/getUserData'
import { getUserIsLoading } from '../model/selectors/getUserIsLoading'
import { logoutService } from '../model/services/logoutService'
import cls from './UserCard.module.scss'

interface UserCardProps {
  className?: string
}

export const UserCard = (props: UserCardProps) => {
  const { className } = props
  const isLoading = useSelector(getUserIsLoading)
  const userData = useSelector(getUserData)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickLogout = useCallback(async () => {
    const result = await dispatch(logoutService())
    if(result.meta.requestStatus === 'fulfilled') {
      navigate(RoutePaths.ENTRY)
    }
  }, [dispatch, navigate])

  return (
    <Card
      className={classNames(cls.UserCard, {}, [className])}
      theme='background'
    >
      <div className={cls.info}>
        <Avatar />
        <Text
          text={userData?.name}
          size='s'
        />
      </div>
      <Button
        size='s'
        isLoading={isLoading}
        onClick={onClickLogout}
        max
      >
        Выйти
      </Button>
    </Card>
  )
}

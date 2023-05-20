import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserError } from 'entities/User/model/selectors/getUserError'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
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
  const error = useSelector(getUserError)
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
    <div
      className={classNames(cls.UserCard, {}, [className])}
    >
      {error && (
        <Text
          text='Произошла ошибка'
          theme='error'
        />
      )}
      <div className={cls.info}>
        <Avatar size={40}/>
        <Text
          text={userData?.name}
        />
      </div>
      <Button
        disabled={isLoading}
        onClick={onClickLogout}
        max
      >
        Выйти
      </Button>
    </div>
  )
}

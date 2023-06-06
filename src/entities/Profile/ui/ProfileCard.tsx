import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from 'entities/Profile/model/services/logoutUser'
import { getUserData } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import { getProfileCardError } from '../model/selectors/getProfileCardError'
import { getProfileCardIsLoading } from '../model/selectors/getProfileCardIsLoading'
import { profileCardReducer } from '../model/slice/ProfileCardSlice'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

const reducersList: ReducersList = {
  profileCard: profileCardReducer
}

export const ProfileCard = (props: ProfileCardProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const userData = useSelector(getUserData)
  const isLoading = useSelector(getProfileCardIsLoading)
  const error = useSelector(getProfileCardError)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickLogout = useCallback(async () => {
    const result = await dispatch(logoutUser())
    if(result.meta.requestStatus === 'fulfilled') {
      navigate(RoutePaths.ENTRY)
    }
  }, [dispatch, navigate])

  return (
    <Card
      className={classNames(cls.ProfileCard, {}, [className])}
      theme='border'
    >
      {error && (
        <Text
          className={cls.error}
          text='Произошла ошибка при выходе из уч. записи'
          theme='error'
          size='s'
        />
      )}
      <div className={cls.user}>
        <Avatar />
        <Text
          text={userData?.name}
          size='s'
        />
      </div>
      <Button
        size='s'
        onClick={onClickLogout}
        disabled={isLoading}
        max
      >
        Выйти
      </Button>
      <Text
        className={cls.userId}
        text={`id:${userData?.id ?? ''}`}
        size='xs'
        align='center'
      />
    </Card>
  )
}

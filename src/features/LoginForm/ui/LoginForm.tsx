import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { getLoginFormError } from '../model/selectors/getLoginFormError'
import { getLoginFormIsLoading } from '../model/selectors/getLoginFormIsLoading'
import { getLoginFormLogin } from '../model/selectors/getLoginFormLogin'
import { getLoginFormPassword } from '../model/selectors/getLoginFormPassword'
import { loginService } from '../model/services/loginService'
import { loginActions, loginReducer } from '../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const reducersList: ReducersList = {
  loginForm: loginReducer
}

export const LoginForm = memo((props: LoginFormProps) => {
  useReducersLoader({ reducersList, removeAfterUnmount: true })
  const { className } = props
  const login = useSelector(getLoginFormLogin)
  const password = useSelector(getLoginFormPassword)
  const isLoading = useSelector(getLoginFormIsLoading)
  const error = useSelector(getLoginFormError)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginActions.setLogin(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onClickLogin = useCallback(async () => {
    const result = await dispatch(loginService())
    if(result.meta.requestStatus === 'fulfilled') {
      navigate(RoutePaths.EQUIPMENTS)
    }
  }, [dispatch, navigate])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title='Логин' />
      {error && (
        <Text
          className={cls.error}
          text={error}
          theme='error'
          size='s'
        />
      )}
      <Input
        placeholder='Введите логин'
        label='Логин'
        onChange={onChangeLogin}
        value={login}
      />
      <Input
        placeholder='Введите пароль'
        label='Пароль'
        type='password'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onClickLogin}
        disabled={isLoading}
      >
        Войти
      </Button>
      <AppLink className={cls.link} to={RoutePaths.SING_UP}>
        Нет уч. записи?
      </AppLink>
    </div>
  )
})

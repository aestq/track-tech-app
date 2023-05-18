import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { getSignupError } from '../model/selectors/getSignupError'
import { getSignupFormLogin } from '../model/selectors/getSignupFormLogin'
import { getSignupFormName } from '../model/selectors/getSignupFormName'
import { getSignupFormPassword } from '../model/selectors/getSignupFormPassword'
import { getSignupIsLoading } from '../model/selectors/getSignupIsLoading'
import { signupService } from '../model/services/signupService'
import { signupActions } from '../model/slice/signupSlice'
import cls from './SignupForm.module.scss'

interface SignupFormProps {
  className?: string
}

export const SignupForm = (props: SignupFormProps) => {
  const { className } = props
  const login = useSelector(getSignupFormLogin)
  const name = useSelector(getSignupFormName)
  const password = useSelector(getSignupFormPassword)
  const isLoading = useSelector(getSignupIsLoading)
  const error = useSelector(getSignupError)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onChangeLogin = useCallback((value: string) => {
    dispatch(signupActions.setLogin(value))
  }, [dispatch])

  const onChangeName = useCallback((value: string) => {
    dispatch(signupActions.setName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(signupActions.setPassword(value))
  }, [dispatch])

  const onSignUpClick = useCallback(async () => {
    const result = await dispatch(signupService())
    if(result.meta.requestStatus === 'fulfilled') {
      navigate(RoutePaths.HOME)
    }
  }, [dispatch, navigate])

  return (
    <div className={classNames(cls.SignupForm, {}, [className])}>
      <Text title='Регистрация' />
      {error && (
        <Text
          className={cls.error}
          text={error}
          theme='error'
          size='s'
        />
      )}
      <Input
        label='Логин'
        placeholder='Введите логин'
        onChange={onChangeLogin}
        value={login}
      />
      <Input
        label='Имя'
        placeholder='Введите имя'
        onChange={onChangeName}
        value={name}
      />
      <Input
        label='Пароль'
        placeholder='Введите пароль'
        type='password'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onSignUpClick}
        disabled={isLoading}
      >
        Начать
      </Button>
      <AppLink className={cls.link} to={RoutePaths.LOGIN}>
        Есть уч. запись?
      </AppLink>
    </div>
  )
}

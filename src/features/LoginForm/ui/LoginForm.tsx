import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { type LoginFormSchema, loginFormSchema } from 'features/LoginForm/lib/schema'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/redesign/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'shared/ui/redesign/form'
import { Input } from 'shared/ui/redesign/input'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { getLoginFormError } from '../model/selectors/getLoginFormError'
import { getLoginFormIsLoading } from '../model/selectors/getLoginFormIsLoading'
import { loginService } from '../model/services/loginService'
import { loginReducer } from '../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

const reducersList: ReducersList = {
    loginForm: loginReducer,
}

export const LoginForm = memo((props: LoginFormProps) => {
    useReducersLoader({ reducersList, removeAfterUnmount: true })
    const { className } = props
    const isLoading = useSelector(getLoginFormIsLoading)
    const error = useSelector(getLoginFormError)
    const dispatch = useAppDispatch()

    const form = useForm<LoginFormSchema>({
        mode: 'onTouched',
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: zodResolver(loginFormSchema),
    })

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    const onClickLogin = useCallback(
        (formData: LoginFormSchema) => {
            dispatch(loginService(formData))
        },
        [dispatch]
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onClickLogin)} className={classNames(cls.LoginForm, {}, [className])}>
                <FormField
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Логин</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите логин" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    name={'login'}
                />
                <FormField
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите пароль" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    name={'password'}
                />
                <Button type="submit" disabled={isLoading}>
                    Войти
                    {isLoading && <Spinner className="ml-1" theme="background" size="s" />}
                </Button>
            </form>
        </Form>
    )
})

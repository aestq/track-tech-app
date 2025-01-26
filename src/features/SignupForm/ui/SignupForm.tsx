import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { signUpFormSchema, type SignUpFormSchema } from 'features/SignupForm/lib/schema'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/redesign/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'shared/ui/redesign/form'
import { Input } from 'shared/ui/redesign/input'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { getSignupError } from '../model/selectors/getSignupError'
import { getSignupIsLoading } from '../model/selectors/getSignupIsLoading'
import { signupService } from '../model/services/signupService'
import { signupReducer } from '../model/slice/signupSlice'
import cls from './SignupForm.module.scss'

interface SignupFormProps {
    className?: string
}

const reducersList: ReducersList = {
    signupForm: signupReducer,
}

export const SignupForm = (props: SignupFormProps) => {
    useReducersLoader({ reducersList, removeAfterUnmount: true })
    const { className } = props
    const isLoading = useSelector(getSignupIsLoading)
    const error = useSelector(getSignupError)
    const dispatch = useAppDispatch()

    const form = useForm<SignUpFormSchema>({
        mode: 'onTouched',
        defaultValues: {
            login: '',
            password: '',
            name: '',
        },
        resolver: zodResolver(signUpFormSchema),
    })

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    const onSignUpClick = useCallback(
        async (formData: SignUpFormSchema) => {
            dispatch(signupService(formData))
        },
        [dispatch]
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSignUpClick)} className={classNames(cls.SignupForm, {}, [className])}>
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
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите имя" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    name={'name'}
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
                    Начать
                    {isLoading && <Spinner className="ml-1" theme="background" size="s" />}
                </Button>
            </form>
        </Form>
    )
}

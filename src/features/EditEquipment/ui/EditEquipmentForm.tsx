import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { editEquipmentSchema, type EditEquipmentSchema } from 'features/EditEquipment/lib/schema'
import { createEquipment } from 'features/EditEquipment/model/services/createEquipment'
import { updateEquipment } from 'features/EditEquipment/model/services/updateEquipment'
import { type Equipment } from 'entities/Equipment'
import { items } from 'entities/Equipment/model/consts/consts'
import { RoomSelect } from 'entities/Room'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/redesign/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'shared/ui/redesign/form'
import { Input } from 'shared/ui/redesign/input'
import { Tabs, TabsList, TabsTrigger } from 'shared/ui/redesign/tabs'
import { Textarea } from 'shared/ui/redesign/textarea'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { getEditEquipmentError } from '../model/selectors/getEditEquipmentError'
import { getEditEquipmentIsLoading } from '../model/selectors/getEditEquipmentIsLoading'
import { editEquipmentReducer } from '../model/slice/editEquipmentSlice'
import cls from './EditEquipmentForm.module.scss'

interface EditEquipmentFormProps {
    data?: Equipment
    className?: string
    onSuccess?: () => void
}

const reducersList: ReducersList = {
    editEquipment: editEquipmentReducer,
}

export const EditEquipmentForm = (props: EditEquipmentFormProps) => {
    useReducersLoader({ reducersList })
    const { className, data, onSuccess } = props
    const isLoading = useSelector(getEditEquipmentIsLoading)
    const error = useSelector(getEditEquipmentError)
    const isAdmin = useSelector(getUserIsAdmin)
    const dispatch = useAppDispatch()

    const form = useForm<EditEquipmentSchema>({
        mode: 'onTouched',
        defaultValues: {
            name: data?.name ?? '',
            roomId: data?.room?.id ?? null,
            specifications: data?.specifications ?? '',
            status: data?.status ?? 'use',
            stockNumber: data?.stockNumber ?? '',
        },
        resolver: zodResolver(editEquipmentSchema),
    })

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    const onClickEdit = async (formData: EditEquipmentSchema) => {
        const result = await dispatch(data ? updateEquipment({ ...formData, id: data.id }) : createEquipment(formData))

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.()
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onClickEdit)}
                className={classNames(cls.EditEquipmentForm, {}, [className, 'space-y-3'])}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Наименование</FormLabel>
                            <FormControl>
                                <Input className="w-full" placeholder="Введите наименование" readOnly={!isAdmin} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="stockNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Номер</FormLabel>
                            <FormControl>
                                <Input className="w-full" placeholder="Введите номер" readOnly={!isAdmin} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Статус</FormLabel>
                            <FormControl>
                                <Tabs value={field.value} onValueChange={field.onChange}>
                                    <TabsList className="w-full">
                                        {items.map((item) => (
                                            <TabsTrigger className="w-full" key={item.value} value={item.value}>
                                                {item.content}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="specifications"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Характеристики</FormLabel>
                            <FormControl>
                                <Textarea className="w-full" placeholder="Введите характеристики" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="roomId"
                    render={() => (
                        <FormItem>
                            <FormLabel>Кабинет</FormLabel>
                            <FormControl>
                                <RoomSelect />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={!form.formState.isValid || isLoading} className="w-full">
                    {data ? 'Сохранить' : 'Создать'}
                    {isLoading && <Spinner theme="background" size="s" />}
                </Button>
            </form>
        </Form>
    )
}

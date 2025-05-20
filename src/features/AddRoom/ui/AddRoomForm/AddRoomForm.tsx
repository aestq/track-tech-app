import { zodResolver } from '@hookform/resolvers/zod'
import { type ChangeEvent, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { z } from 'zod'
import { fetchEquipments } from 'pages/EquipmentsPage/model/services/fetchEquipments'
import { updateRoom } from 'features/AddRoom/model/services/updateRoom'
import { type Room } from 'entities/Room'
import { fetchRooms } from 'entities/Room/model/services/fetchRooms'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/redesign/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'shared/ui/redesign/form'
import { Input } from 'shared/ui/redesign/input'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { getAddRoomError } from '../../model/selectors/getAddRoomError'
import { getAddRoomIsLoading } from '../../model/selectors/getAddRoomIsLoading'
import { createRoom } from '../../model/services/createRoom'
import { addRoomReducer } from '../../model/slice/addRoomSlice'
import cls from './AddRoomForm.module.scss'

export interface AddRoomFormProps {
    className?: string
    onSuccess?: () => void
    room?: Room
}

const reducersList: ReducersList = {
    addRoom: addRoomReducer,
}

const schema = z.object({
    number: z.coerce.number().min(100, 'От 100').max(599, 'До 599').int('Номер должно быть целочисленным'),
})

const AddRoomForm = (props: AddRoomFormProps) => {
    useReducersLoader({ reducersList })
    const { className, onSuccess, room } = props
    const isLoading = useSelector(getAddRoomIsLoading)
    const error = useSelector(getAddRoomError)
    const dispatch = useAppDispatch()

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
        defaultValues: {
            number: room?.number ?? 100,
        },
    })

    const onChangeNumber = (onChange: (value: string) => void) => {
        return (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value

            if (!/^\d+$/.test(value) && value !== '') {
                event.preventDefault()
                event.stopPropagation()
                return
            }

            onChange(value)
        }
    }

    const onClickCreate = useCallback(
        async ({ number: num }: z.infer<typeof schema>) => {
            if (room) {
                const result = await dispatch(updateRoom({ num, id: room.id }))
                if (result.meta.requestStatus === 'fulfilled') {
                    toast.success('Номер изменен')
                    dispatch(fetchRooms())
                    dispatch(fetchEquipments({ invalidate: true }))
                    onSuccess?.()
                }
                return
            }

            const result = await dispatch(createRoom(num))

            if (result.meta.requestStatus === 'fulfilled') {
                toast.success('Кабинет добавлен')
                dispatch(fetchRooms())
                dispatch(fetchEquipments({}))

                onSuccess?.()
            }
        },
        [dispatch, onSuccess, room]
    )

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onClickCreate)} className={classNames(cls.AddRoom, {}, [className])}>
                <FormField
                    name={'number'}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Номер</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите номер" {...field} onChange={onChangeNumber(field.onChange)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading} className="w-full mt-3">
                    {room ? 'Сохранить' : 'Создать'}
                    {isLoading && <Spinner size="s" theme="background" />}
                </Button>
            </form>
        </Form>
    )
}

export default AddRoomForm

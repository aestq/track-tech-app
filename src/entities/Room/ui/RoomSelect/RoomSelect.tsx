import { Check, ChevronsUpDown } from 'lucide-react'
import { memo, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { getRoomData } from 'entities/Room/model/selectors/getRoomData'
import { getRoomError } from 'entities/Room/model/selectors/getRoomError'
import { getRoomIsLoading } from 'entities/Room/model/selectors/getRoomIsLoading'
import { fetchRooms } from 'entities/Room/model/services/fetchRooms'
import { roomReducer } from 'entities/Room/model/slice/roomSlice'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/redesign/button'
import { Command, CommandList, CommandGroup, CommandItem, CommandInput, CommandEmpty } from 'shared/ui/redesign/command'
import { Popover, PopoverTrigger, PopoverContent } from 'shared/ui/redesign/popover'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

const reducersList: ReducersList = {
    room: roomReducer,
}

export const RoomSelect = memo(() => {
    useReducersLoader({ reducersList })
    const form = useFormContext<{ roomId: number | null }>()
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()

    const roomId = form.watch('roomId')

    const rooms = useSelector(getRoomData)
    const isLoading = useSelector(getRoomIsLoading)
    const isError = useSelector(getRoomError)

    useEffect(() => {
        dispatch(fetchRooms())
    }, [])

    if (isLoading) {
        return <Skeleton height={40} width="100%" radius={6} />
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {roomId ? rooms?.find((room) => room.id === roomId)?.number : 'Выберите кабинет...'}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                {isError ? (
                    <p className="text-center text-destructive">Не удалось получить список</p>
                ) : (
                    <Command>
                        <CommandInput placeholder="Поиск..." className="h-9" />
                        <CommandList className="overflow-y-auto max-h-32">
                            <CommandEmpty>Кабинеты не найдены.</CommandEmpty>
                            <CommandGroup>
                                <CommandItem
                                    value={''}
                                    onSelect={() => {
                                        form.setValue('roomId', null, {
                                            shouldDirty: true,
                                            shouldTouch: true,
                                            shouldValidate: true,
                                        })
                                        setOpen(false)
                                    }}
                                >
                                    {'- - || - -'}
                                </CommandItem>
                                {rooms?.map((room) => (
                                    <CommandItem
                                        key={room.id}
                                        value={room.number.toString()}
                                        onSelect={() => {
                                            form.setValue('roomId', room.id, {
                                                shouldDirty: true,
                                                shouldTouch: true,
                                                shouldValidate: true,
                                            })
                                            setOpen(false)
                                        }}
                                    >
                                        {room.number}
                                        <Check
                                            className={classNames('ml-auto', {}, [
                                                roomId === room.id ? 'opacity-100' : 'opacity-0',
                                            ])}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                )}
            </PopoverContent>
        </Popover>
    )
})

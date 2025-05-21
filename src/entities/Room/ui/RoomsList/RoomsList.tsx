import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/Store'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import { getRoomData, getRoomGroup } from '../../model/selectors/getRoomData'
import { getRoomError } from '../../model/selectors/getRoomError'
import { getRoomIsLoading } from '../../model/selectors/getRoomIsLoading'
import { fetchRooms } from '../../model/services/fetchRooms'
import { roomReducer } from '../../model/slice/roomSlice'
import { type Room } from '../../model/types/roomSchema'
import { RoomsItem } from '../RoomsItem/RoomsItem'
import cls from './RoomsList.module.scss'

interface RoomsListProps {
    className?: string
    isGroup: boolean
}

const reducersList: ReducersList = {
    room: roomReducer,
}

export const RoomsList = memo((props: RoomsListProps) => {
    useReducersLoader({ reducersList })
    const { className, isGroup } = props
    const items = useSelector((state) => (isGroup ? getRoomGroup(state as StateSchema) : getRoomData(state as StateSchema)))
    const isLoading = useSelector(getRoomIsLoading)
    const error = useSelector(getRoomError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchRooms())
    })

    const render = useCallback((ent: [string, Room[]]) => {
        return (
            <div key={ent[0]}>
                <h1 className="font-semibold text-2xl ml-2 mb-3">{ent[0]}</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,137px))] gap-5 ">
                    {ent[1]?.map((item) => <RoomsItem item={item} key={item.id} />)}
                </div>
            </div>
        )
    }, [])

    if (error) {
        return <Text text="Произошла ошибка при подгрузке кабинетов" theme="error" />
    }

    if (isLoading) {
        return (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-10 mt-7">
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
                <Skeleton width={120} height={120} />
            </div>
        )
    }

    if ((Array.isArray(items) && !items.length) || !Object.entries(items ?? [])?.length) {
        return <Text text="Кабинеты не найдены" className="mt-7" />
    }

    if (Array.isArray(items)) {
        return (
            <section
                className={classNames(cls.RoomsList, {}, [
                    className,
                    ' mt-7 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]',
                ])}
            >
                {items.map((item) => (
                    <RoomsItem className="justify-self-center self-center" item={item} key={item.id} />
                ))}
            </section>
        )
    }

    return (
        <section className={classNames(cls.RoomsList, {}, [className, 'flex flex-col mt-6'])}>
            {Object.entries(items ?? []).map(render)}
        </section>
    )
})

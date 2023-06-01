import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import { getRoomData } from '../../model/selectors/getRoomData'
import { getRoomError } from '../../model/selectors/getRoomError'
import { getRoomIsLoading } from '../../model/selectors/getRoomIsLoading'
import { fetchRooms } from '../../model/services/fetchRooms'
import { roomReducer } from '../../model/slice/roomSlice'
import { type Room } from '../../model/types/roomSchema'
import { RoomsItem } from '../RoomsItem/RoomsItem'
import cls from './RoomsList.module.scss'

interface RoomsListProps {
  className?: string
}

const reducersList: ReducersList = {
  room: roomReducer
}

export const RoomsList = memo((props: RoomsListProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const items = useSelector(getRoomData)
  const isLoading = useSelector(getRoomIsLoading)
  const error = useSelector(getRoomError)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchRooms())
  })

  const render = useCallback((item: Room) => (
    <RoomsItem
      item={item}
      key={item.id}
    />
  ), [])

  if(error) {
    return (
      <Text
        text='Произошла ошибка при подгрузке кабинетов'
        theme='error'
      />
    )
  }

  if(isLoading) {
    return (
      <div className={cls.RoomsList}>
        <Skeleton width={120} height={120} />
        <Skeleton width={120} height={120} />
        <Skeleton width={120} height={120} />
        <Skeleton width={120} height={120} />
      </div>
    )
  }

  if(!items?.length) {
    return (
      <Text
        text='Кабинеты не найдены'
      />
    )
  }

  return (
    <section className={classNames(cls.RoomsList, {}, [className])}>
      {items?.map(render)}
    </section>
  )
})

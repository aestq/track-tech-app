import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { items } from '../../model/items'
import { type Room } from '../../model/types/roomSchema'
import { RoomsItem } from '../RoomsItem/RoomsItem'
import cls from './RoomsList.module.scss'

interface RoomsListProps {
  className?: string
}

export const RoomsList = memo((props: RoomsListProps) => {
  const { className } = props

  const render = useCallback((item: Room) => (
    <RoomsItem
      item={item}
      key={item.id}
    />
  ), [])

  return (
    <section className={classNames(cls.RoomsList, {}, [className])}>
      {items.map(render)}
    </section>
  )
})

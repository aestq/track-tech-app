import { memo, useCallback, useState } from 'react'
import { type User, type UserRoles } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Select } from 'shared/ui/Select/Select'
import { Text } from 'shared/ui/Text/Text'
import { items } from '../../model/consts/items'
import cls from './UserCard.module.scss'

interface UserCardProps {
  className?: string
  user: User
  onChangeSelect?: (value: UserRoles, userId: number) => void
}

export const UserCard = memo((props: UserCardProps) => {
  const {
    className,
    user,
    onChangeSelect
  } = props
  const [selected, setSelected] = useState(user.roles[0])

  const onChangeHandler = useCallback((value: UserRoles) => {
    setSelected(value)
    onChangeSelect?.(value, user.id)
  }, [onChangeSelect, user])

  return (
    <Card
      className={classNames(cls.UserCard, {}, [className])}
      theme='border'
    >
      <div className={cls.user}>
        <Text
          text={`id: ${user.id}`}
          size='s'
        />
        <Text
          text={user.name}
          size='s'
        />
      </div>
      <Select
        onChange={onChangeHandler}
        items={items}
        value={selected}
      />
    </Card>
  )
})

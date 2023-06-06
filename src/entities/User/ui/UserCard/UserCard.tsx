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
  onChangeRole?: (value: UserRoles, userId: number) => void
}

export const UserCard = memo((props: UserCardProps) => {
  const {
    className,
    user,
    onChangeRole
  } = props
  const [selected, setSelected] = useState(user.roles[0])

  const onChangeSelect = useCallback((value: UserRoles) => {
    setSelected(value)
    if(onChangeRole) {
      onChangeRole(value, user.id)
    }
  }, [onChangeRole, user])

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
        items={items}
        value={selected}
        onChange={onChangeSelect}
      />
    </Card>
  )
})

import { useCallback } from 'react'
import { UserCard } from 'entities/User/ui/UserCard/UserCard'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { type User, type UserRoles } from '../../model/types/UserSchema'
import cls from './UserList.module.scss'

interface UserListProps {
  className?: string
  items?: User[]
  isLoading?: boolean
  onChangeRole?: (value: UserRoles, userId: number) => void
}

export const UserList = (props: UserListProps) => {
  const { className, items, isLoading, onChangeRole } = props

  const render = useCallback((user: User) => (
    <UserCard
     user={user}
     key={user.id}
     onChangeRole={onChangeRole}
   />
  ), [])

  if(isLoading) {
    return (
      <div className={cls.UserList}>
        <Skeleton width='100%' height={54} />
        <Skeleton width='100%' height={54} />
        <Skeleton width='100%' height={54} />
        <Skeleton width='100%' height={54} />
        <Skeleton width='100%' height={54} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.UserList, {}, [className])}>
      {items?.map(render)}
    </div>
  )
}

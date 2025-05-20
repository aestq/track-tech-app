import { UserCard } from 'entities/User/ui/UserCard/UserCard'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { type User, type UserRoles } from '../../model/types/UserSchema'
import cls from './UserList.module.scss'

interface UserListProps {
    className?: string
    items?: User[]
    isLoading?: boolean
    onChangeSelect?: (value: UserRoles, userId: number) => void
}

export const UserList = (props: UserListProps) => {
    const { className, items, isLoading, onChangeSelect } = props

    if (isLoading) {
        return (
            <div className={cls.UserList}>
                <Skeleton width="100%" height={54} />
                <Skeleton width="100%" height={54} />
                <Skeleton width="100%" height={54} />
                <Skeleton width="100%" height={54} />
                <Skeleton width="100%" height={54} />
            </div>
        )
    }

    if(!items?.length) {
        return (
            <div className='h-[60dvh] flex items-center justify-center'>
                <div className='w-[300px] border rounded-sm p-4'>
                <h3 className='text-xl text-center'>Нет данных</h3>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.UserList, {}, [className])}>
            {items?.map((user) => <UserCard user={user} key={user.id} onChangeSelect={onChangeSelect} />)}
        </div>
    )
}

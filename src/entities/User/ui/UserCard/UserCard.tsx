import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserData, type User, type UserRoles } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card, CardContent } from 'shared/ui/redesign/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'shared/ui/redesign/select'
import { Text } from 'shared/ui/Text/Text'
import { items } from '../../model/consts/items'
import cls from './UserCard.module.scss'

interface UserCardProps {
    className?: string
    user: User
    onChangeSelect?: (value: UserRoles, userId: number) => void
}

export const UserCard = memo((props: UserCardProps) => {
    const { className, user, onChangeSelect } = props
    const [selected, setSelected] = useState(user.roles[0])
    const userData = useSelector(getUserData)

    const onChangeHandler = useCallback(
        (value: UserRoles) => {
            setSelected(value)
            onChangeSelect?.(value, user.id)
        },
        [onChangeSelect, user]
    )

    return (
        <Card className={classNames(cls.UserCard, {}, [className])}>
            <CardContent
                className="flex items-center gap-3 justify-between w-full p-4"
                style={{ justifyContent: 'space-between' }}
            >
                <div className={cls.user}>
                    <p children={`id: ${user.id}`} className="text-sm" />
                    <p children={user.name} className="text-sm" />
                </div>

                <Select defaultValue={selected} onValueChange={onChangeHandler} disabled={userData?.id === user.id}>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-[150px]">
                        {items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.content}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    )
})

import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { changeRole } from 'pages/AdminPage/model/services/changeRole'
import { UserList, type UserRoles } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text } from 'shared/ui/Text/Text'
import { getAdminData } from '../../model/selectors/getAdminData'
import { getAdminError } from '../../model/selectors/getAdminError'
import { getAdminIsLoading } from '../../model/selectors/getAdminIsLoading'

interface AdminPageUserListProps {
    className?: string
}

export const AdminPageUserList = (props: AdminPageUserListProps) => {
    const { className } = props
    const data = useSelector(getAdminData)
    const isLoading = useSelector(getAdminIsLoading)
    const error = useSelector(getAdminError)
    const dispatch = useAppDispatch()

    const onChangeRole = useCallback(
        async (value: UserRoles, userId: number) => {
            const result = await dispatch(changeRole({ value, userId }))

            if (result.meta.requestStatus === 'fulfilled') {
                toast.success('Роль изменена')
            } else {
                toast.error('Не удалось изменить роль')
            }
        },
        [dispatch]
    )

    if (error) {
        return <Text text="Произошла ошибка при подгрузке пользователей" theme="error" />
    }

    return <UserList className={className} items={data} isLoading={isLoading} onChangeSelect={onChangeRole} />
}

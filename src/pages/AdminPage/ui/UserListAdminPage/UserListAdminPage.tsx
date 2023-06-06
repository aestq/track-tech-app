import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { changeRole } from 'pages/AdminPage/model/services/changeRole'
import { UserList, type UserRoles } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { getAdminData } from '../../model/selectors/getAdminData'
import { getAdminError } from '../../model/selectors/getAdminError'
import { getAdminIsLoading } from '../../model/selectors/getAdminIsLoading'
import { fetchUsers } from '../../model/services/fetchUsers'
import { adminReducer } from '../../model/slice/adminSlice'

interface UserListAdminPageProps {
  className?: string
}

const reducersList: ReducersList = {
  admin: adminReducer
}

export const UserListAdminPage = (props: UserListAdminPageProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const data = useSelector(getAdminData)
  const isLoading = useSelector(getAdminIsLoading)
  const error = useSelector(getAdminError)
  const dispatch = useAppDispatch()

  const onChangeRole = useCallback(
    (value: UserRoles, userId: number) => {
      dispatch(changeRole({ value, userId }))
    },
    [dispatch]
  )

  useInitialEffect(() => {
    dispatch(fetchUsers())
  })

  return (
    <UserList
      className={className}
      items={data}
      isLoading={isLoading}
      onChangeRole={onChangeRole}
    />
  )
}

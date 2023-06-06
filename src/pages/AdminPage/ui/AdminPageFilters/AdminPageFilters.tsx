import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Input } from 'shared/ui/Input/Input'
import { getAdminSearch } from '../../model/selectors/getAdminSearch'
import { fetchUsers } from '../../model/services/fetchUsers'
import { adminActions } from '../../model/slice/adminSlice'
import cls from './AdminPageFilters.module.scss'

interface AdminPageFiltersProps {
  className?: string
}

export const AdminPageFilters = (props: AdminPageFiltersProps) => {
  const { className } = props
  const search = useSelector(getAdminSearch)
  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeSearch = useCallback((value: string) => {
    dispatch(adminActions.setSearch(value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  return (
    <div className={classNames(cls.AdminPageFilters, {}, [className])}>
      <Input
        placeholder='Поиск'
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  )
}

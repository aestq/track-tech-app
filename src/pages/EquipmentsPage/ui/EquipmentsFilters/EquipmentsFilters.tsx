import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { EquipmentsSortByStatus, type SortByStatus } from 'features/EquipmentsSortByStatus'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Input } from 'shared/ui/Input/Input'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getEquipmentsSearch } from '../../model/selectors/getEquipmentsSearch'
import { getEquipmentsStatus } from '../../model/selectors/getEquipmentsStatus'
import { fetchEquipmentsService } from '../../model/services/fetchEquipmentsService'
import { equipmentsActions } from '../../model/slice/equipmentsSlice'
import cls from './EquipmentsFilters.module.scss'

interface EquipmentsFiltersProps {
  className?: string
}

export const EquipmentsFilters = (props: EquipmentsFiltersProps) => {
  const { className } = props
  const search = useSelector(getEquipmentsSearch)
  const status = useSelector(getEquipmentsStatus)
  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchEquipmentsService())
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeSearch = useCallback((value: string) => {
    dispatch(equipmentsActions.setSearch(value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeStatus = useCallback((tab: TabItem) => {
    dispatch(equipmentsActions.setStatus(tab.value as SortByStatus))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.EquipmentsFilters, {}, [className])}>
      <EquipmentsSortByStatus
        value={status as SortByStatus}
        onChange={onChangeStatus}
      />
      <Input
        className={cls.search}
        placeholder='Поиск'
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  )
}

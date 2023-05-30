import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { EquipmentsSortByRoom, type SortByRoom } from 'features/EquipmentsSortByRoom'
import { EquipmentsSortByStatus, type SortByStatus } from 'features/EquipmentsSortByStatus'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Input } from 'shared/ui/Input/Input'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getEquipmentsRoom } from '../../model/selectors/getEquipmentsRoom'
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
  const room = useSelector(getEquipmentsRoom)
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

  const onChangeRoom = useCallback((tab: TabItem) => {
    dispatch(equipmentsActions.setRoom(tab.value as SortByRoom))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.EquipmentsFilters, {}, [className])}>
      <div className={cls.sorts}>
        <EquipmentsSortByStatus
          value={status}
          onChange={onChangeStatus}
        />
        <EquipmentsSortByRoom
          value={room}
          onChange={onChangeRoom}
        />
      </div>
      <Input
        className={cls.search}
        placeholder='Поиск'
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  )
}

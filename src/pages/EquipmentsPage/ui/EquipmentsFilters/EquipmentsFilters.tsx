import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddEquipmentModal } from 'features/AddEquipment'
import { EquipmentsSortByRoom, type SortByRoom } from 'features/EquipmentsSortByRoom'
import { EquipmentsSortByStatus, type SortByStatus } from 'features/EquipmentsSortByStatus'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getEquipmentsRoom } from '../../model/selectors/getEquipmentsRoom'
import { getEquipmentsSearch } from '../../model/selectors/getEquipmentsSearch'
import { getEquipmentsStatus } from '../../model/selectors/getEquipmentsStatus'
import { fetchEquipments } from '../../model/services/fetchEquipments'
import { equipmentsActions } from '../../model/slice/equipmentsSlice'
import cls from './EquipmentsFilters.module.scss'

interface EquipmentsFiltersProps {
  className?: string
}

export const EquipmentsFilters = (props: EquipmentsFiltersProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState(false)
  const search = useSelector(getEquipmentsSearch)
  const status = useSelector(getEquipmentsStatus)
  const room = useSelector(getEquipmentsRoom)
  const isAdmin = useSelector(getUserIsAdmin)
  const dispatch = useAppDispatch()

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const fetchData = useCallback(() => {
    dispatch(fetchEquipments())
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeSearch = useCallback((value: string) => {
    dispatch(equipmentsActions.setSearch(value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeStatus = useCallback((tab: TabItem<SortByStatus>) => {
    dispatch(equipmentsActions.setStatus(tab.value))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeRoom = useCallback((tab: TabItem<SortByRoom>) => {
    dispatch(equipmentsActions.setRoom(tab.value))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.EquipmentsFilters, {}, [className])}>
      <div className={cls.panel}>
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
        {isAdmin && (
          <Button onClick={openModal}>
            Создать
          </Button>
        )}
      </div>
      <Input
        className={cls.search}
        placeholder='Поиск'
        value={search}
        onChange={onChangeSearch}
      />
      <AddEquipmentModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  )
}

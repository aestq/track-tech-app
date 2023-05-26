import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Input } from 'shared/ui/Input/Input'
import { getEquipmentsSearch } from '../../model/selectors/getEquipmentsSearch'
import { fetchEquipmentsService } from '../../model/services/fetchEquipmentsService'
import { equipmentsActions } from '../../model/slice/equipmentsSlice'
import cls from './EquipmentsFilters.module.scss'

interface EquipmentsFiltersProps {
  className?: string
}

export const EquipmentsFilters = (props: EquipmentsFiltersProps) => {
  const { className } = props
  const search = useSelector(getEquipmentsSearch)
  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchEquipmentsService())
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeSearch = useCallback((value: string) => {
    dispatch(equipmentsActions.setSearch(value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  return (
    <div className={classNames(cls.EquipmentsFilters, {}, [className])}>
      <Input
        placeholder='Поиск'
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  )
}

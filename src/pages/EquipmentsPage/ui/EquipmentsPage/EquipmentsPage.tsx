import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EquipmentTable } from 'entities/Equipment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { getEquipmentsData } from '../../model/selectors/getEquipmentsData'
import { getEquipmentsError } from '../../model/selectors/getEquipmentsError'
import { getEquipmentsIsLoading } from '../../model/selectors/getEquipmentsIsLoading'
import { initEquipmentsService } from '../../model/services/initEquipmentsService'
import { equipmentsReducer } from '../../model/slice/equipmentsSlice'
import { EquipmentsFilters } from '../EquipmentsFilters/EquipmentsFilters'
import cls from './EquipmentsPage.module.scss'

const reducersList: ReducersList = {
  equipments: equipmentsReducer
}

const EquipmentsPage = () => {
  useReducersLoader({ reducersList })
  const data = useSelector(getEquipmentsData)
  const isLoading = useSelector(getEquipmentsIsLoading)
  const error = useSelector(getEquipmentsError)
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(initEquipmentsService(searchParams))
    // eslint-disable-next-line
  }, [])

  return (
    <Page title='Оборудование'>
      <EquipmentsFilters />
      <EquipmentTable
        className={cls.table}
        isLoading={isLoading}
        items={data}
        error={error}
      />
    </Page>
  )
}

export default EquipmentsPage

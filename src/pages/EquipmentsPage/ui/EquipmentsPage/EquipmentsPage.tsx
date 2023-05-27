import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { initEquipmentsService } from '../../model/services/initEquipmentsService'
import { equipmentsReducer } from '../../model/slice/equipmentsSlice'
import { EquipmentsFilters } from '../EquipmentsFilters/EquipmentsFilters'
import { EquipmentsPageTable } from '../EquipmentsPageTable/EquipmentsPageTable'
import cls from './EquipmentsPage.module.scss'

const reducersList: ReducersList = {
  equipments: equipmentsReducer
}

const EquipmentsPage = () => {
  useReducersLoader({ reducersList })
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(initEquipmentsService(searchParams))
    // eslint-disable-next-line
  }, [])

  return (
    <Page title='Оборудование'>
      <EquipmentsFilters />
      <EquipmentsPageTable
        className={cls.table}
      />
    </Page>
  )
}

export default EquipmentsPage

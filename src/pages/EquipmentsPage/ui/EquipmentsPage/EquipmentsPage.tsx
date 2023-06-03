import { useSearchParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { initEquipmentsPage } from '../../model/services/initEquipmentsPage'
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

  useInitialEffect(() => {
    dispatch(initEquipmentsPage(searchParams))
  })

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

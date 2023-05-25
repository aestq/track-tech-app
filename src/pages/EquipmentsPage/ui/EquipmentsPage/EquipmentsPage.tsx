import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Page } from 'widgets/Page'
import { EquipmentTable } from 'entities/Equipment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { getEquipmentsData } from '../../model/selectors/getEquipmentsData'
import { getEquipmentsError } from '../../model/selectors/getEquipmentsError'
import { getEquipmentsIsLoading } from '../../model/selectors/getEquipmentsIsLoading'
import { fetchEquipmentsService } from '../../model/services/fetchEquipmentsService'
import { equipmentsReducer } from '../../model/slice/equipmentsSlice'
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

  useEffect(() => {
    dispatch(fetchEquipmentsService())
  }, [dispatch])

  return (
    <Page title='Оборудование'>
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

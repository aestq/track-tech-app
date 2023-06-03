import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { EquipmentForm, type EquipmentStatus } from 'entities/Equipment'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { Text } from 'shared/ui/Text/Text'
import { getEditEquipmentError } from '../model/selectors/getEditEquipmentError'
import { getEditEquipmentFormData } from '../model/selectors/getEditEquipmentFormData'
import { getEditEquipmentInit } from '../model/selectors/getEditEquipmentInit'
import { getEditEquipmentIsLoading } from '../model/selectors/getEditEquipmentIsLoading'
import { fetchEquipment } from '../model/services/fetchEquipment'
import { editEquipmentActions, editEquipmentReducer } from '../model/slice/editEquipmentSlice'
import cls from './EditEquipmentForm.module.scss'

interface EditEquipmentFormProps {
  className?: string
  id: string
}

const reducersList: ReducersList = {
  editEquipment: editEquipmentReducer
}

export const EditEquipmentForm = (props: EditEquipmentFormProps) => {
  useReducersLoader({ reducersList })
  const { className, id } = props
  const formData = useSelector(getEditEquipmentFormData)
  const isLoading = useSelector(getEditEquipmentIsLoading)
  const error = useSelector(getEditEquipmentError)
  const init = useSelector(getEditEquipmentInit)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchEquipment(id))
  })

  const onChangeName = useCallback((value: string) => {
    dispatch(editEquipmentActions.setFormData({ name: value }))
  }, [dispatch])

  const onChangeStockNumber = useCallback((value: string) => {
    dispatch(editEquipmentActions.setFormData({ stockNumber: value }))
  }, [dispatch])

  const onChangeStatus = useCallback((tab: TabItem<EquipmentStatus>) => {
    dispatch(editEquipmentActions.setFormData({ status: tab.value }))
  }, [dispatch])

  const onChangeSpecifications = useCallback((value: string) => {
    dispatch(editEquipmentActions.setFormData({ specifications: value }))
  }, [dispatch])

  const onChangeRoom = useCallback((value: string) => {
    dispatch(editEquipmentActions.setFormData({ room: value }))
  }, [dispatch])

  if(!init) {
    return (
      <Skeleton width={200} height={50} />
    )
  }

  if(error) {
    return (
      <Text
        text={error}
        theme='error'
      />
    )
  }

  return (
    <Card
      className={classNames(cls.EditEquipmentForm, {}, [className])}
      theme='border'
    >
      <EquipmentForm
        data={formData}
        onChangeName={onChangeName}
        onChangeStockNumber={onChangeStockNumber}
        onChangeStatus={onChangeStatus}
        onChangeSpecifications={onChangeSpecifications}
        onChangeRoom={onChangeRoom}
        isLoading={isLoading}
      />
    </Card>
  )
}

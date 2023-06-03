import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { EquipmentForm, type EquipmentStatus } from 'entities/Equipment'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getAddEquipmentError } from '../../model/selectors/getAddEquipmentError'
import { getAddEquipmentFormData } from '../../model/selectors/getAddEquipmentFormData'
import { getAddEquipmentIsLoading } from '../../model/selectors/getAddEquipmentIsLoading'
import { createEquipment } from '../../model/services/createEquipment'
import { addEquipmentActions, addEquipmentReducer } from '../../model/slice/AddEquipmentSlice'
import cls from './AddEquipmentForm.module.scss'

export interface AddEquipmentFormProps {
  className?: string
  onSuccess: () => void
}

const reducersList: ReducersList = {
  addEquipment: addEquipmentReducer
}

const AddEquipmentForm = (props: AddEquipmentFormProps) => {
  useReducersLoader({ reducersList })
  const { className, onSuccess } = props
  const formData = useSelector(getAddEquipmentFormData)
  const isLoading = useSelector(getAddEquipmentIsLoading)
  const error = useSelector(getAddEquipmentError)
  const dispatch = useAppDispatch()

  const onChangeName = useCallback((value: string) => {
    dispatch(addEquipmentActions.setFormData({ name: value }))
  }, [dispatch])

  const onChangeStockNumber = useCallback((value: string) => {
    dispatch(addEquipmentActions.setFormData({ stockNumber: value }))
  }, [dispatch])

  const onChangeStatus = useCallback((tab: TabItem<EquipmentStatus>) => {
    dispatch(addEquipmentActions.setFormData({ status: tab.value }))
  }, [dispatch])

  const onChangeSpecifications = useCallback((value: string) => {
    dispatch(addEquipmentActions.setFormData({ specifications: value }))
  }, [dispatch])

  const onChangeRoom = useCallback((value: string) => {
    dispatch(addEquipmentActions.setFormData({ room: value }))
  }, [dispatch])

  const onClickCreate = useCallback(async () => {
    const result = await dispatch(createEquipment())
    if(result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess])

  return (
    <EquipmentForm
      className={classNames(cls.AddEquipment, {}, [className])}
      data={formData}
      onChangeName={onChangeName}
      onChangeStockNumber={onChangeStockNumber}
      onChangeStatus={onChangeStatus}
      onChangeSpecifications={onChangeSpecifications}
      onChangeRoom={onChangeRoom}
      onClick={onClickCreate}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default AddEquipmentForm

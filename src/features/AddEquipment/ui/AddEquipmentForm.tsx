import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { EquipmentForm, type EquipmentStatus } from 'entities/Equipment'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getAddEquipmentFormData } from '../model/selectors/getAddEquipmentFormData'
import { addEquipmentActions, addEquipmentReducer } from '../model/slice/AddEquipmentSlice'
import cls from './AddEquipmentForm.module.scss'

interface AddEquipmentFormProps {
  className?: string
}

const reducersList: ReducersList = {
  addEquipment: addEquipmentReducer
}

export const AddEquipmentForm = (props: AddEquipmentFormProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const formData = useSelector(getAddEquipmentFormData)
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

  const onClickCreate = useCallback(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className={classNames(cls.AddEquipmentForm, {}, [className])}>
      <EquipmentForm
        data={formData}
        onChangeName={onChangeName}
        onChangeStockNumber={onChangeStockNumber}
        onChangeStatus={onChangeStatus}
        onChangeSpecifications={onChangeSpecifications}
        onChangeRoom={onChangeRoom}
        onClick={onClickCreate}
      />
    </div>
  )
}

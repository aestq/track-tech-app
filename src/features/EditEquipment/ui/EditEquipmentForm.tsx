import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteEquipment } from 'features/EditEquipment/model/services/deleteEquipment'
import { updateEquipment } from 'features/EditEquipment/model/services/updateEquipment'
import { EquipmentForm, type EquipmentStatus } from 'entities/Equipment'
import TrashIcon from 'shared/assets/icons/trash-icon.svg'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { Text } from 'shared/ui/Text/Text'
import { getEditEquipmentError } from '../model/selectors/getEditEquipmentError'
import { getEditEquipmentFormData } from '../model/selectors/getEditEquipmentFormData'
import { getEditEquipmentInit } from '../model/selectors/getEditEquipmentInit'
import { getEditEquipmentIsLoading } from '../model/selectors/getEditEquipmentIsLoading'
import { fetchEquipment } from '../model/services/fetchEquipment'
import { editEquipmentActions, editEquipmentReducer } from '../model/slice/editEquipmentSlice'
import cls from './EditEquipmentForm.module.scss'
import { SkeletonForm } from './SkeletonForm'

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
  const navigate = useNavigate()

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

  const onClickEdit = useCallback(() => {
    dispatch(updateEquipment())
  }, [dispatch])

  const onClickDelete = useCallback(async () => {
    const result = await dispatch(deleteEquipment(id))
    if(result.meta.requestStatus === 'fulfilled') {
      navigate(RoutePaths.EQUIPMENTS)
    }
  }, [dispatch, id, navigate])

  if(!init) {
    return <SkeletonForm />
  }

  if(error) {
    return (
      <Text
        text='Произошла ошибка при подгрузке оборудования'
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
      />
      <div className={cls.buttons}>
        <Button
          onClick={onClickEdit}
          disabled={isLoading}
          max
        >
          Создать
        </Button>
        <Button
          theme='red'
          size='s'
          disabled={isLoading}
          onClick={onClickDelete}
        >
          <TrashIcon className={cls.trash} />
        </Button>
      </div>
    </Card>
  )
}

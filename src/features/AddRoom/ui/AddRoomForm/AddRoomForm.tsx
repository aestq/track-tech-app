import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RoomForm } from 'entities/Room'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Text } from 'shared/ui/Text/Text'
import { getAddRoomError } from '../../model/selectors/getAddRoomError'
import { getAddRoomIsLoading } from '../../model/selectors/getAddRoomIsLoading'
import { getAddRoomNumber } from '../../model/selectors/getAddRoomNumber'
import { createRoom } from '../../model/services/createRoom'
import { addRoomActions, addRoomReducer } from '../../model/slice/addRoomSlice'
import cls from './AddRoomForm.module.scss'

export interface AddRoomFormProps {
  className?: string
  onSuccess?: () => void
}

const reducersList: ReducersList = {
  addRoom: addRoomReducer
}

const AddRoomForm = (props: AddRoomFormProps) => {
  useReducersLoader({ reducersList })
  const { className, onSuccess } = props
  const number = useSelector(getAddRoomNumber)
  const isLoading = useSelector(getAddRoomIsLoading)
  const error = useSelector(getAddRoomError)
  const dispatch = useAppDispatch()

  const onChangeNumber = useCallback((value: string) => {
    dispatch(addRoomActions.setNumber(value))
  }, [dispatch])

  const onClickCreate = useCallback(async () => {
    const result = await dispatch(createRoom())
    if(result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [dispatch, onSuccess])

  return (
    <div
      className={classNames(cls.AddRoom, {}, [className])}
    >
      {error && (
        <Text
          className={cls.error}
          text={error}
          size='s'
          theme='error'
        />
      )}
      <RoomForm
        number={number}
        onChangeNumber={onChangeNumber}
        onClick={onClickCreate}
        isLoading={isLoading}
      />
    </div>
  )
}

export default AddRoomForm

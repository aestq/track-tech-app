import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './RoomForm.module.scss'

interface RoomFormProps {
  className?: string
  onChangeNumber?: (value: string) => void
  number?: string
  onClick?: () => void
  isLoading?: boolean
}

export const RoomForm = (props: RoomFormProps) => {
  const {
    className,
    onChangeNumber,
    number,
    onClick,
    isLoading
  } = props

  return (
    <div className={classNames(cls.RoomForm, {}, [className])}>
      <Input
        label='Номер кабинета'
        placeholder='Введите номер кабинета'
        onChange={onChangeNumber}
        value={number}
      />
      <Button
        disabled={isLoading}
        onClick={onClick}
        max
      >
        Создать
      </Button>
    </div>
  )
}

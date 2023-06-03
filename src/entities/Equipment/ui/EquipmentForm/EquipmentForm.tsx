import { memo } from 'react'
import { type Equipment, type EquipmentStatus } from 'entities/Equipment'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { Text } from 'shared/ui/Text/Text'
import { Textarea } from 'shared/ui/Textarea/Textarea'
import { items } from '../../model/consts/consts'
import cls from './EquipmentForm.module.scss'

interface EquipmentFormProps {
  className?: string
  data?: Equipment
  onChangeName?: (value: string) => void
  onChangeStockNumber?: (value: string) => void
  onChangeStatus?: (tab: TabItem<EquipmentStatus>) => void
  onChangeSpecifications?: (value: string) => void
  onChangeRoom?: (value: string) => void
  onClick?: () => void
  isLoading?: boolean
}

export const EquipmentForm = memo((props: EquipmentFormProps) => {
  const {
    className,
    onChangeName,
    onChangeStockNumber,
    onChangeStatus,
    onChangeSpecifications,
    onChangeRoom,
    onClick,
    data,
    isLoading
  } = props

  return (
    <div className={classNames(cls.EquipmentForm, {}, [className])}>
      <Text
        title='Создание оборудования'
      />
      <Input
        placeholder='Введите наименование'
        label='Наименование'
        onChange={onChangeName}
        value={data?.name}
      />
      <Input
        placeholder='Введите номер'
        label='Номер'
        onChange={onChangeStockNumber}
        value={data?.stockNumber}
      />
      <Tabs
        tabs={items}
        value={data?.status}
        onChange={onChangeStatus}
        label='Статус'
      />
      <Textarea
        label='Характеристики'
        placeholder='Введите характеристики'
        onChange={onChangeSpecifications}
        value={data?.specifications}
      />
      <Input
        label='Кабинет'
        placeholder='Введите кабинет'
        onChange={onChangeRoom}
        value={data?.room}
      />
      <Button
        onClick={onClick}
        disabled={isLoading}
      >
        Создать
      </Button>
    </div>
  )
})

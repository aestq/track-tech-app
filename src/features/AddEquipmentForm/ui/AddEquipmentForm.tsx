import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Select } from 'shared/ui/Select/Select'
import { Tabs } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/consts/items'
import cls from './AddEquipmentForm.module.scss'

interface AddEquipmentFormProps {
  className?: string
}

export const AddEquipmentForm = (props: AddEquipmentFormProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.AddEquipmentFrom, {}, [className])}>
      <Input
        label='Наименование'
        placeholder='Введите наименование'
      />
      <Input
        label='Уникальный номер'
        placeholder='Введите номер'
      />
      <Tabs
        tabs={items}
        value={items[0].value}
        onChange={(tab) => {}}
      />
      <Select />
    </div>
  )
}

import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import cls from './EquipmentSearch.module.scss'

interface SearchEquipmentProps {
  className?: string
}

export const EquipmentSearch = (props: SearchEquipmentProps) => {
  const { className } = props

  return (
    <Input
      className={classNames(cls.SearchEquipment, {}, [className])}
      placeholder='Поиск'
    />
  )
}

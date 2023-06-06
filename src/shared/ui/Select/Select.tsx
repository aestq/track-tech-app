import { type ChangeEvent, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectItem<T> {
  content: ReactNode
  value: T
}

interface SelectProps<T> {
  items?: Array<SelectItem<T>>
  onChange?: (value: T) => void
  className?: string
  value?: T
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    items,
    onChange,
    value
  } = props

  const render = useCallback((item: SelectItem<T>) => (
    <option
      value={item.value}
      key={item.value}
    >
      {item.content}
    </option>
  ), [])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T)
  }

  return (
    <select
      className={classNames(cls.Select, {}, [className])}
      onChange={onChangeHandler}
      value={value}
    >
      {items?.map(render)}
    </select>
  )
}

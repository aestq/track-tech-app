import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Th.module.scss'

interface ThProps {
  className?: string
  children: ReactNode
}

export const Th = (props: ThProps) => {
  const { className, children } = props

  return (
    <th className={classNames(cls.Th, {}, [className])}>
      {children}
    </th>
  )
}

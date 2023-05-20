import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Td.module.scss'

interface TdProps {
  className?: string
  children: ReactNode
}

export const Td = (props: TdProps) => {
  const { className, children } = props

  return (
    <td className={classNames(cls.Td, {}, [className])}>
      {children}
    </td>
  )
}

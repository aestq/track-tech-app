import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tr.module.scss'

interface TrProps {
  className?: string
  children: ReactNode
}

export const Tr = (props: TrProps) => {
  const { className, children } = props

  return (
    <tr className={classNames(cls.Tr, {}, [className])}>
      {children}
    </tr>
  )
}

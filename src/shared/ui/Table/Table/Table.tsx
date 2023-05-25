import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Table.module.scss'

interface TableProps {
  className?: string
  children: ReactNode
}

export const Table = memo((props: TableProps) => {
  const { className, children } = props

  return (
    <table className={classNames(cls.Table, {}, [className])}>
      <tbody>
        {children}
      </tbody>
    </table>
  )
})

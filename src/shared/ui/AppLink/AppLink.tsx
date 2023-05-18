import { memo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

interface AppLinkProps {
  className?: string
  to: string
  children: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children
  } = props

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className])}>
      {children}
    </Link>
  )
})

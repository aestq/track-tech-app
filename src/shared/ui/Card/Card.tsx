import { type ReactNode, type HTMLAttributes, memo } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

type CardTheme = 'background' | 'primary' | 'secondary'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = 'primary',
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[theme]
  ]

  return (
    <div
      className={classNames(cls.Card, {}, additional)}
      {...otherProps}
    >
      {children}
    </div>
  )
})

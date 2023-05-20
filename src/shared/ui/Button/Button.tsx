import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { type Additional, classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type ButtonTheme = 'clear' | 'primary' | 'secondary'
type ButtonSize = 's' | 'm' | 'l'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  max?: boolean
  children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'primary',
    size = 'm',
    max,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.max]: max
  }

  const additional: Additional = [
    className,
    cls[size],
    cls[theme]
  ]

  return (
    <button className={classNames(cls.Button, mods, additional)} {...otherProps}>
      {children}
    </button>
  )
})

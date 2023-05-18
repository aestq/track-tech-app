import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Spinner.module.scss'

type SpinnerSize = 's' | 'm' | 'l'
type SpinnerTheme = 'primary' | 'background'

interface SpinnerProps {
  className?: string
  theme?: SpinnerTheme
  size?: SpinnerSize
}

export const Spinner = (props: SpinnerProps) => {
  const {
    className,
    size = 'm',
    theme = 'primary'
  } = props

  const additional: Additional = [
    className,
    cls[theme],
    cls[size]
  ]

  return (
    <div className={classNames(cls.Spinner, {}, additional)} />
  )
}

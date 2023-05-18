import { memo } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TextTheme = 'primary' | 'background' | 'error'
type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl'
type TextAlign = 'left' | 'center' | 'right'
type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

interface TextProps {
  className?: string
  theme?: TextTheme
  size?: TextSize
  title?: string
  text?: string
  align?: TextAlign
}

const headingMap: Record<TextSize, HeadingSize> = {
  xs: 'h5',
  s: 'h4',
  m: 'h3',
  l: 'h2',
  xl: 'h1'
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = 'primary',
    size = 'm',
    title,
    text,
    align = 'left'
  } = props

  const HeadingTag = headingMap[size]

  const additional: Additional = [
    className,
    cls[theme],
    cls[size],
    cls[align]
  ]

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && (
        <HeadingTag className={cls.title}>{title}</HeadingTag>
      )}
      {text && (
        <p className={cls.text}>{text}</p>
      )}
    </div>
  )
})

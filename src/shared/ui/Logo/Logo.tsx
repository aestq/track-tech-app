import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import cls from './Logo.module.scss'

type LogoSize = 'm' | 'xl'

interface LogoProps {
  className?: string
  size?: LogoSize
}

export const Logo = memo((props: LogoProps) => {
  const { className, size = 'm' } = props

  return (
    <div className={classNames(cls.Logo, {}, [className, cls[size]])}>
      <Card
        className={cls.square}
        theme='primary'
      />
      <Text
        title='TrackTech'
        size={size}
      />
    </div>
  )
})

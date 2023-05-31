import { type CSSProperties, memo } from 'react'
import AvatarIcon from 'shared/assets/icons/avatar-icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  size?: number
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, size = 30 } = props

  const style: CSSProperties = {
    width: size,
    height: size
  }

  return (
    <div
      className={classNames(cls.Avatar, {}, [className])}
      style={style}
    >
      <AvatarIcon className={cls.icon} />
    </div>
  )
})

import { type CSSProperties, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  radius?: string | number
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    width,
    height,
    radius = 10
  } = props

  const styles = useMemo<CSSProperties>(() => ({ width, height, borderRadius: radius }),
    [width, height, radius])

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  )
}

import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './EquipmentTableItem.module.scss'

interface EquipmentItemSkeletonProps {
  className?: string
}

export const EquipmentItemSkeleton = (props: EquipmentItemSkeletonProps) => {
  return (
    <div className={cls.skeletonItem}>
      <Skeleton className={cls.skeleton} />
      <Skeleton className={cls.skeleton} />
      <Skeleton className={cls.skeleton} />
      <Skeleton className={cls.skeleton} />
      <Skeleton className={cls.skeleton} />
    </div>
  )
}

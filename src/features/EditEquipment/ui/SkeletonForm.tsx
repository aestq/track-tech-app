import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './EditEquipmentForm.module.scss'

export const SkeletonForm = () => {
  return (
    <Card
      className={cls.skeletons}
      theme='border'
    >
      <div>
        <Skeleton className={cls.label} width={70} height={14} radius={0} />
        <Skeleton width={400} height={40} radius={5} />
      </div>
      <div>
        <Skeleton className={cls.label} width={70} height={14} radius={0} />
        <Skeleton width={400} height={40} radius={5} />
      </div>
      <div>
        <Skeleton className={cls.label} width={70} height={14} radius={0} />
        <div className={cls.skeletonTabs}>
          <Skeleton width={110} height={30} radius={5} />
          <Skeleton width={70} height={30} radius={5} />
        </div>
      </div>
      <div>
        <Skeleton className={cls.label} width={70} height={14} radius={0} />
        <Skeleton width={400} height={70} radius={5} />
      </div>
      <div>
        <Skeleton className={cls.label} width={70} height={14} radius={0} />
        <Skeleton width={400} height={40} radius={5} />
      </div>
      <Skeleton width={400} height={35} radius={5} />
    </Card>
  )
}

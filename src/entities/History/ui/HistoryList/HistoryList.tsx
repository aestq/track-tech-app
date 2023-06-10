import { classNames } from 'shared/lib/classNames/classNames'
import { HistoryItem } from '../HistoryItem/HistoryItem'
import cls from './HistoryList.module.scss'

interface HistoryListProps {
  className?: string
}

export const HistoryList = (props: HistoryListProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.HistoryList, {}, [className])}>
      <HistoryItem />
    </div>
  )
}

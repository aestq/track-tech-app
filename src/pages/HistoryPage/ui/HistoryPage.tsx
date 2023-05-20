import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HistoryPage.module.scss'

interface HistoryPageProps {
  className?: string
}

export const HistoryPage = (props: HistoryPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.HistoryPage, {}, [className])}>
      History
    </div>
  )
}

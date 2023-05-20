import { classNames } from 'shared/lib/classNames/classNames'
import cls from './RoomsPage.module.scss'

interface RoomsPageProps {
  className?: string
}

export const RoomsPage = (props: RoomsPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.RoomsPage, {}, [className])}>
      RoomsPage
    </div>
  )
}

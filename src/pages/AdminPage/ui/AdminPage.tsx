import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AdminPage.module.scss'

interface AdminPageProps {
  className?: string
}

export const AdminPage = (props: AdminPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.AdminPage, {}, [className])}>
      AdminPage
    </div>
  )
}

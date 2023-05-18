import { UserCard } from 'entities/User'
import cls from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={cls.HomePage}>
      <UserCard />
    </div>
  )
}

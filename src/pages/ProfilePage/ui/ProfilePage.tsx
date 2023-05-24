import { Page } from 'widgets/Page'
import { UserCard } from 'entities/User'
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
  return (
    <Page title='Профиль'>
      <div className={cls.userCard}>
        <UserCard />
      </div>
    </Page>
  )
}

export default ProfilePage

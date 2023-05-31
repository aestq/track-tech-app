import { Page } from 'widgets/Page'
import { ProfileCard } from 'entities/Profile'
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
  return (
    <Page title='Профиль'>
      <div className={cls.profileCard}>
        <ProfileCard />
      </div>
    </Page>
  )
}

export default ProfilePage

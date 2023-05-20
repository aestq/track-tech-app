import { Page } from 'widgets/Page'
import { UserCard } from 'entities/User'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfilePage.module.scss'

export const ProfilePage = () => {
  return (
    <Page>
      <Text
        title='Профиль'
      />
      <div className={cls.userCard}>
        <UserCard />
      </div>
    </Page>
  )
}

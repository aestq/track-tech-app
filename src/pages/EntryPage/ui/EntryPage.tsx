import { useNavigate } from 'react-router-dom'
import waves from 'shared/assets/images/waves.jpg'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { Button } from 'shared/ui/Button/Button'
import { Logo } from 'shared/ui/Logo/Logo'
import { Text } from 'shared/ui/Text/Text'
import cls from './EntryPage.module.scss'

const EntryPage = () => {
  const navigate = useNavigate()

  const onClickSignUp = () => {
    navigate(RoutePaths.SING_UP)
  }

  const onClickLogin = () => {
    navigate(RoutePaths.LOGIN)
  }

  return (
    <div className={cls.EntryPage}>
      <header className={cls.header}>
        <Button role='link' onClick={onClickLogin}>Войти</Button>
      </header>
      <main className={cls.main}>
        <section className={cls.getStarted}>
          <Logo size='xl' className={cls.logo}/>
          <Button role='link' onClick={onClickSignUp}>Начать</Button>
        </section>
        <section className={cls.background}>
          <img
            className={cls.waves}
            src={waves}
            alt='waves'
           />
          <Text
            text='Система учёта оборудования :D'
            align='center'
          />
        </section>
      </main>
    </div>
  )
}

export default EntryPage

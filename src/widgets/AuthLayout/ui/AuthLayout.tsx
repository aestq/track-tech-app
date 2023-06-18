import { type ReactNode } from 'react'
import backArrow from 'shared/assets/icons/back-arrow.png'
import waves from 'shared/assets/images/waves.jpg'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './AuthLayout.module.scss'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props

  return (
    <>
      <header className={cls.header}>
        <AppLink className={cls.backLink} to={RoutePaths.ENTRY}>
          <img
            className={cls.backArrow}
            src={backArrow}
            alt='back'
          />
          Вернуться на главную
        </AppLink>
      </header>
      <main className={cls.main}>
        {children}
        <img
          className={cls.waves}
          src={waves}
          alt='waves'
        />
      </main>
    </>
  )
}

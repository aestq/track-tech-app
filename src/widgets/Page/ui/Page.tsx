import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  title?: string
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const { className, children, title } = props

  return (
    <section className={classNames(cls.Page, {}, [className])}>
      {title && (
        <Text
          className={cls.title}
          title={title}
        />
      )}
      {children}
    </section>
  )
})

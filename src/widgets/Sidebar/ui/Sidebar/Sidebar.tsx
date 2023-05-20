import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { type Item } from 'widgets/Sidebar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import { getSidebarItems } from '../../model/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const items = useSelector(getSidebarItems)

  const render = useCallback((item: Item) => (
    <SidebarItem
      text={item.text}
      Icon={item.icon}
      path={item.path}
      key={item.path}
    />
  ), [])

  return (
    <aside className={classNames(cls.Sidebar, {}, [className])}>
      <Logo className={cls.logo}/>
      <div className={cls.items}>
        {items.map(render)}
      </div>
    </aside>
  )
}

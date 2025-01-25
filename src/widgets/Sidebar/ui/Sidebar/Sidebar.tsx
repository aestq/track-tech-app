import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useCallback } from 'react'
import { AiOutlineDown, AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { type Item } from 'widgets/Sidebar/model/items'
import { getUserData } from 'entities/User'
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
    const userData = useSelector(getUserData)

    const render = useCallback(
        (item: Item) => <SidebarItem text={item.text} Icon={item.icon} path={item.path} key={item.path} />,
        []
    )

    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <Logo className={cls.logo} />

            <DropdownMenu>
                <DropdownMenuTrigger className={cls.dropdownTrigger}>
                    <span className={cls.span}>
                        <AiOutlineUser className={cls.userIcon} />
                        {userData?.name}
                    </span>
                    <AiOutlineDown className={cls.arrow} />
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuContent sideOffset={4} className={cls.content}>
                        <DropdownMenuItem className={cls.item}>Выйти</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenuPortal>
            </DropdownMenu>
            <div className={cls.items}>{items.map(render)}</div>
        </aside>
    )
}

import { useCallback } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { type Item } from 'widgets/Sidebar/model/items'
import { getUserData } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import { Avatar, AvatarFallback } from 'shared/ui/redesign/avatar'
import { Button } from 'shared/ui/redesign/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/redesign/dropdown-menu'
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
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center justify-between w-full mb-3" variant="outline">
                        <span className="flex items-center gap-3">
                            <Avatar className="size-6">
                                <AvatarFallback>{userData?.name?.toUpperCase()[0]}</AvatarFallback>
                            </Avatar>
                            {userData?.name}
                        </span>
                        <AiOutlineDown className={cls.arrow} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]" sideOffset={4}>
                    <DropdownMenuItem>Выйти</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className={cls.items}>{items.map(render)}</div>
        </aside>
    )
}

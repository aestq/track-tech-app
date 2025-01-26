import { type LucideProps } from 'lucide-react'
import { type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { type RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { buttonVariants } from 'shared/ui/redesign/button'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    className?: string
    text: string
    Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    path: RoutePaths
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { className, Icon, text, path } = props
    const location = useLocation()

    const isActive = location.pathname === path

    return (
        <Link
            className={classNames(cls.SidebarItem, {}, [
                buttonVariants({ variant: 'outline' }),
                isActive ? 'bg-secondary/80' : '',
            ])}
            to={path}
        >
            <span className="flex w-full gap-3 items-center">
                <Icon className={cls.icon} />
                {text}
            </span>
        </Link>
    )
}

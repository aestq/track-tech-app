import { createSelector } from '@reduxjs/toolkit'
import { ClockIcon, DoorClosedIcon, LaptopMinimalIcon, UserSearchIcon } from 'lucide-react'
import { type Item } from 'widgets/Sidebar/model/items'
import { getUserIsAdmin } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getSidebarItems = createSelector(getUserIsAdmin, (isAdmin) => {
    const items: Item[] = [
        {
            text: 'Оборудование',
            path: RoutePaths.EQUIPMENTS,
            icon: LaptopMinimalIcon,
        },
        {
            text: 'Кабинеты',
            path: RoutePaths.ROOMS,
            icon: DoorClosedIcon,
        },
        {
            text: 'Журнал',
            path: RoutePaths.HISTORY,
            icon: ClockIcon,
        },
    ]

    if (isAdmin) {
        items.push({
            text: 'Пользователи',
            path: RoutePaths.ADMIN,
            icon: UserSearchIcon,
        })
    }

    return items
})

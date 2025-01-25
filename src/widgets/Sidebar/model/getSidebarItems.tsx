import { createSelector } from '@reduxjs/toolkit'
import { AiOutlineDesktop, AiOutlineRadiusUpright, AiOutlineClockCircle, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { type Item } from 'widgets/Sidebar/model/items'
import { getUserIsAdmin } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getSidebarItems = createSelector(getUserIsAdmin, (isAdmin) => {
    const items: Item[] = [
        {
            text: 'Оборудование',
            path: RoutePaths.EQUIPMENTS,
            icon: AiOutlineDesktop,
        },
        {
            text: 'Кабинеты',
            path: RoutePaths.ROOMS,
            icon: AiOutlineRadiusUpright,
        },
        {
            text: 'История',
            path: RoutePaths.HISTORY,
            icon: AiOutlineClockCircle,
        },
    ]

    if (isAdmin) {
        items.push({
            text: 'Пользователи',
            path: RoutePaths.ADMIN,
            icon: AiOutlineUsergroupAdd,
        })
    }

    return items
})

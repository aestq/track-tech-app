import { createSelector } from '@reduxjs/toolkit'
import { type Item } from 'widgets/Sidebar/model/items'
import { getUserIsAdmin } from 'entities/User'
import HistoryIcon from 'shared/assets/icons/history-icon.svg'
import HomeIcon from 'shared/assets/icons/home-icon.svg'
import ProfileIcon from 'shared/assets/icons/profile-icon.svg'
import RoomIcon from 'shared/assets/icons/room-icon.svg'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export const getSidebarItems = createSelector(getUserIsAdmin, (isAdmin) => {
  const items: Item[] = [
    {
      text: 'Главная',
      path: RoutePaths.HOME,
      icon: HomeIcon
    },
    {
      text: 'Кабинеты',
      path: RoutePaths.ROOMS,
      icon: RoomIcon
    },
    {
      text: 'История',
      path: RoutePaths.HISTORY,
      icon: HistoryIcon
    },
    {
      text: 'Профиль',
      path: RoutePaths.PROFILE,
      icon: ProfileIcon
    }
  ]

  if(isAdmin) {
    items.push({
      text: 'Админ',
      path: RoutePaths.ADMIN,
      icon: ProfileIcon
    })
  }

  return items
})

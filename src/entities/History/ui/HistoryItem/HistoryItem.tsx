import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import ArrowIcon from 'shared/assets/icons/back-arrow.png'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Card } from 'shared/ui/Card/Card'
import { TableCell, TableRow } from 'shared/ui/redesign/table'
import { Text } from 'shared/ui/Text/Text'
import { type History } from '../../model/types/HistorySchema'
import cls from './HistoryItem.module.scss'

interface HistoryItemProps {
    className?: string
    history: History
}

const getEquipmentRoute = (id: number) => RoutePaths.EQUIPMENTS + String(id)

export const HistoryItem = (props: HistoryItemProps) => {
    const { className, history } = props
    const isAdmin = useSelector(getUserIsAdmin)
    const isModerator = useSelector(getUserIsModerator)

    return (
        <TableRow>
            <TableCell>{history.data}</TableCell>
            <TableCell>{dayjs(history.createdAt).format('DD.MM.YYYY HH:mm:ss')}</TableCell>
            <TableCell>
                {history.user.login} (id: {history.user.id})
            </TableCell>
        </TableRow>
    )
}

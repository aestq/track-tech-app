import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { Button } from 'shared/ui/redesign/button'
import { TableCell, TableRow } from 'shared/ui/redesign/table'
import { EquipmentStatusText } from '../../model/consts/consts'
import { type Equipment } from '../../model/types/Equipment'

interface EquipmentItemProps {
    className?: string
    item: Equipment
    onClick?: (item: Equipment) => void
}

const getRoute = (id: number) => RoutePaths.EQUIPMENTS + String(id)

export const EquipmentItem = memo((props: EquipmentItemProps) => {
    const { className, item, onClick } = props
    const isAdmin = useSelector(getUserIsAdmin)
    const isModerator = useSelector(getUserIsModerator)

    const onClickHandler = useCallback(
        (item: Equipment) => {
            return () => {
                onClick?.(item)
            }
        },
        [onClick]
    )

    if (!item?.id) {
        return null
    }

    return (
        <TableRow className={className}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.stockNumber}</TableCell>
            <TableCell>{EquipmentStatusText[item?.status ?? 'use']}</TableCell>
            <TableCell>
                <Button size="sm" onClick={onClickHandler(item)}>
                    Посмотреть
                </Button>
            </TableCell>
            <TableCell>{item.room}</TableCell>
        </TableRow>
    )
})

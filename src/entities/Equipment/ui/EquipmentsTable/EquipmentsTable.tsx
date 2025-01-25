import { memo, useCallback, useState } from 'react'
import { SpecificationsModal } from 'entities/Equipment/ui/SpecificationsModal'
import { classNames } from 'shared/lib/classNames/classNames'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'shared/ui/redesign/table'
import { Text } from 'shared/ui/Text/Text'
import { type Equipment } from '../../model/types/Equipment'
import { EquipmentItem } from '../EquipmentItem/EquipmentItem'
import { EquipmentItemSkeleton } from '../EquipmentItem/EquipmentItemSkeleton'
import cls from './EquipmentsTable.module.scss'

interface EquipmentTableProps {
    className?: string
    items?: Equipment[]
    isLoading?: boolean
}

export const EquipmentsTable = memo((props: EquipmentTableProps) => {
    const { className, items, isLoading } = props
    const [isOpen, setIsOpen] = useState(false)
    const [specifications, setSpecifications] = useState('')

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onOpen = useCallback((item: Equipment) => {
        setSpecifications(item?.specifications ?? '')
        setIsOpen(true)
    }, [])

    const render = useCallback((item: Equipment) => <EquipmentItem item={item} key={item.id} onClick={onOpen} />, [onOpen])

    if (isLoading) {
        return (
            <div className={cls.skeletons}>
                <EquipmentItemSkeleton />
                <EquipmentItemSkeleton />
                <EquipmentItemSkeleton />
                <EquipmentItemSkeleton />
                <EquipmentItemSkeleton />
            </div>
        )
    }

    return (
        <Table className={classNames(cls.EquipmentsTable, {}, [className])}>
            <TableHeader>
                <TableRow>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Номер</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Характеристики</TableHead>
                    <TableHead>Кабинет</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {items?.length ? (
                    items?.map(render)
                ) : (
                    <TableRow>
                        <TableCell className="text-center" colSpan={5}>
                            Нет данных
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
            <SpecificationsModal isOpen={isOpen} onClose={onClose} specifications={specifications} />
        </Table>
    )
})

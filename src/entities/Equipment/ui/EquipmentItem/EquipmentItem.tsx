import { memo, useCallback, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { fetchEquipments } from 'pages/EquipmentsPage/model/services/fetchEquipments'
import { EditEquipmentForm } from 'features/EditEquipment'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { $api } from 'shared/api/api'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from 'shared/ui/redesign/alert-dialog'
import { Button } from 'shared/ui/redesign/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from 'shared/ui/redesign/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/redesign/dropdown-menu'
import { TableCell, TableRow } from 'shared/ui/redesign/table'
import { EquipmentStatusText } from '../../model/consts/consts'
import { type Equipment } from '../../model/types/Equipment'

interface EquipmentItemProps {
    className?: string
    item: Equipment
    onClick?: (item: Equipment) => void
}

export const EquipmentItem = memo((props: EquipmentItemProps) => {
    const { className, item, onClick } = props
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const isModerator = useSelector(getUserIsModerator)
    const isAdmin = useSelector(getUserIsAdmin)

    const onClickHandler = useCallback(
        (item: Equipment) => {
            return () => {
                onClick?.(item)
            }
        },
        [onClick]
    )

    const onClickDelete = useCallback(async () => {
        try {
            await $api.delete<Equipment>(`/equipments/${item.id}`)
            dispatch(fetchEquipments({ invalidate: true }))
            toast.success('Оборудование удалено')
        } catch {
            toast.error('Не удалось удалить оборудование')
        }
    }, [])

    if (!item?.id) {
        return null
    }

    return (
        <TableRow
            className={classNames(
                '',
                {
                    'opacity-65': item.status === 'discarded',
                },
                [className]
            )}
        >
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.stockNumber}</TableCell>
            <TableCell>{EquipmentStatusText[item?.status ?? 'use']}</TableCell>
            <TableCell>
                <Button size="sm" className="text-sm h-8" onClick={onClickHandler(item)}>
                    Посмотреть
                </Button>
            </TableCell>
            <TableCell>{item.room?.number ?? '-'}</TableCell>
            <TableCell>
                {(isModerator || isAdmin) && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <BsThreeDots />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]" sideOffset={4}>
                            <DropdownMenuItem
                                onClick={() => {
                                    setIsOpen(true)
                                }}
                            >
                                Редактировать
                            </DropdownMenuItem>
                            {isAdmin && (
                                <DropdownMenuItem
                                    onClick={() => {
                                        setIsOpenDelete(true)
                                    }}
                                >
                                    Удалить
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Редактирование оборудования</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>

                        <EditEquipmentForm
                            onSuccess={() => {
                                setIsOpen(false)
                                dispatch(fetchEquipments({ invalidate: true }))
                            }}
                            data={item}
                        />
                    </DialogContent>
                </Dialog>
                <AlertDialog open={isOpenDelete} onOpenChange={setIsOpenDelete}>
                    <AlertDialogContent className="w-[500px]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Удалить оборудование "{item.name}"?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Это действие нельзя будет отменить. Оборудование будет удалено навсегда.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction onClick={onClickDelete}>Удалить</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </TableCell>
        </TableRow>
    )
})

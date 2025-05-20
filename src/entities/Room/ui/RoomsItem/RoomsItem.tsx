import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { fetchEquipments } from 'pages/EquipmentsPage/model/services/fetchEquipments'
import { AddRoomModal } from 'features/AddRoom'
import { fetchRooms } from 'entities/Room/model/services/fetchRooms'
import { getUserIsAdmin, getUserIsModerator } from 'entities/User'
import { $api } from 'shared/api/api'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Card } from 'shared/ui/Card/Card'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
} from 'shared/ui/redesign/alert-dialog'
import { Button } from 'shared/ui/redesign/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/redesign/dropdown-menu'
import { Text } from 'shared/ui/Text/Text'
import { type Room } from '../../model/types/roomSchema'
import cls from './RoomsItem.module.scss'

interface RoomsItemProps {
    className?: string
    item: Room
}

export const RoomsItem = (props: RoomsItemProps) => {
    const { className, item } = props
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
    const dispatch = useAppDispatch()
    const isAdmin = useSelector(getUserIsAdmin)

    const onDelete = () => {
        $api.delete(`/rooms/${item.id}`)
            .then(() => {
                toast.success('Кабинет удален')
                dispatch(fetchRooms())
                dispatch(fetchEquipments({}))
            })
            .catch(() => {
                toast.error('Не удалось удалить кабинет')
            })
    }

    return (
        <Card className={classNames(cls.RoomsItem, {}, [className, 'relative'])} theme="border">
            {isAdmin && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="absolute top-1 size-8 right-1" variant={'ghost'} size="icon">
                            <BsThreeDots />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => {
                                setIsOpenUpdate(true)
                            }}
                        >
                            Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                setIsOpenDelete(true)
                            }}
                        >
                            Удалить
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
            <Text title={item.number.toString()} align="center" size="m" />
            <Text text="Кабинет" size="s" />
            <AlertDialog open={isOpenDelete} onOpenChange={setIsOpenDelete}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Это действие нельзя будет отменить. Кабинет будет удален навсегда.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex justify-end gap-3">
                        <AlertDialogCancel>Отмена</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Удалить</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AddRoomModal
                isOpen={isOpenUpdate}
                onClose={() => {
                    setIsOpenUpdate(false)
                }}
                room={item}
            />
        </Card>
    )
}

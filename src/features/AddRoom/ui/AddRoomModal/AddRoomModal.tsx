import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { getUserIsAdmin } from 'entities/User'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from 'shared/ui/redesign/dialog'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AddRoomFormAsync } from '../AddRoomForm/AddRoomForm.async'
import cls from './AddRoomModal.module.scss'
import { Room } from 'entities/Room'

interface AddRoomModalProps {
    isOpen: boolean
    onClose: () => void
    room?: Room
}

export const AddRoomModal = (props: AddRoomModalProps) => {
    const { isOpen, onClose, room } = props
    const isAdmin = useSelector(getUserIsAdmin)

    if (!isAdmin) {
        return null
    }

    const fallback = (
        <div className={cls.skeletons}>
            <div>
                <Skeleton className={cls.label} width={100} height={17} radius={3} />
                <Skeleton width={350} height={37} radius={5} />
            </div>
            <Skeleton width={350} height={37} radius={5} />
        </div>
    )

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[395px]">
                <DialogHeader>
                    <DialogTitle>{room ? 'Редактирование кабинета' : 'Создание кабинета'}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <Suspense fallback={fallback}>
                    <AddRoomFormAsync onSuccess={onClose} room={room} />
                </Suspense>
            </DialogContent>
        </Dialog>
    )
}

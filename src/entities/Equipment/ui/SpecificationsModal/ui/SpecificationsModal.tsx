import { memo } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'shared/ui/redesign/dialog'
import cls from './SpecificationsModal.module.scss'

interface SpecificationsModalProps {
    isOpen: boolean
    onClose: () => void
    specifications?: string
}

export const SpecificationsModal = memo((props: SpecificationsModalProps) => {
    const { isOpen, onClose, specifications } = props

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className={cls.content}>
                <DialogHeader>
                    <DialogTitle>Характеристики</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <p className="whitespace-pre-line">{specifications}</p>
            </DialogContent>
        </Dialog>
    )
})

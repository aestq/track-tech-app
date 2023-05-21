import { type ReactNode, useEffect } from 'react'
import CloseIcon from 'shared/assets/icons/close-icon.svg'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { Text } from 'shared/ui/Text/Text'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  onClose?: () => void
  title?: string
  isOpen?: boolean
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    title,
    isOpen,
    onClose
  } = props

  const onCloseHandler = () => {
    onClose?.()
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if(event.key === 'Escape') {
      onCloseHandler()
    }
  }

  const mods: Mods = {
    [cls.isOpen]: isOpen
  }

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.content}>
          <header className={cls.header}>
            {title && (
              <Text
                className={cls.title}
                title={title}
              />
            )}
            <Button
              className={cls.buttonClose}
              theme='clear'
              onClick={onCloseHandler}
            >
              <CloseIcon className={cls.close}/>
            </Button>
          </header>
          {children}
        </div>
      </div>
    </Portal>
  )
}

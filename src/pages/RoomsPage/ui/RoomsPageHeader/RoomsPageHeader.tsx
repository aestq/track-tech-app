import { Group, List } from 'lucide-react'
import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddRoomModal } from 'features/AddRoom'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/redesign/button'
import { Tabs, TabsList, TabsTrigger } from 'shared/ui/redesign/tabs'
import cls from './RoomsPageHeader.module.scss'

interface RoomsPageHeaderProps {
    className?: string
    setIsGroup: (is: boolean) => void
}

export const RoomsPageHeader = memo((props: RoomsPageHeaderProps) => {
    const { className, setIsGroup } = props
    const isAdmin = useSelector(getUserIsAdmin)
    const [isOpenAddRoom, setIsOpenAddRoom] = useState(false)

    const openAddRoom = useCallback(() => {
        setIsOpenAddRoom(true)
    }, [])

    const closeAddRoom = useCallback(() => {
        setIsOpenAddRoom(false)
    }, [])

    return (
        <header className={classNames(cls.RoomsPageHeader, {}, [className])}>
            <Tabs
                onValueChange={(value) => {
                    setIsGroup(value === 'group')
                }}
                defaultValue="list"
            >
                <TabsList>
                    <TabsTrigger className="flex items-center gap-3" value={'list'}>
                        Список
                        <List className="size-4" />
                    </TabsTrigger>
                    <TabsTrigger className="flex items-center gap-3" value={'group'}>
                        Группы
                        <Group className="size-4" />
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            {isAdmin && (
                <>
                    <Button className={cls.addRoom} onClick={openAddRoom}>
                        Создать
                    </Button>
                    <AddRoomModal isOpen={isOpenAddRoom} onClose={closeAddRoom} />
                </>
            )}
        </header>
    )
})

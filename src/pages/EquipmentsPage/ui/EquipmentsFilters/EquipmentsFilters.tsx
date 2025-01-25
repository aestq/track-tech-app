import { type ChangeEvent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { EditEquipmentForm } from 'features/EditEquipment'
import { EquipmentsSortByRoom, type SortByRoom } from 'features/EquipmentsSortByRoom'
import { EquipmentsSortByStatus, type SortByStatus } from 'features/EquipmentsSortByStatus'
import { getUserIsAdmin } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { Button } from 'shared/ui/redesign/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from 'shared/ui/redesign/dialog'
import { Input } from 'shared/ui/redesign/input'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { getEquipmentsRoom } from '../../model/selectors/getEquipmentsRoom'
import { getEquipmentsSearch } from '../../model/selectors/getEquipmentsSearch'
import { getEquipmentsStatus } from '../../model/selectors/getEquipmentsStatus'
import { fetchEquipments } from '../../model/services/fetchEquipments'
import { equipmentsActions } from '../../model/slice/equipmentsSlice'
import cls from './EquipmentsFilters.module.scss'

interface EquipmentsFiltersProps {
    className?: string
}

export const EquipmentsFilters = (props: EquipmentsFiltersProps) => {
    const { className } = props
    const search = useSelector(getEquipmentsSearch)
    const status = useSelector(getEquipmentsStatus)
    const room = useSelector(getEquipmentsRoom)
    const isAdmin = useSelector(getUserIsAdmin)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const fetchData = useCallback(() => {
        dispatch(fetchEquipments())
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeSearch = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(equipmentsActions.setSearch(event.target.value))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const onChangeStatus = useCallback(
        (tab: TabItem<SortByStatus>) => {
            dispatch(equipmentsActions.setStatus(tab.value))
            fetchData()
        },
        [dispatch, fetchData]
    )

    const onChangeRoom = useCallback(
        (tab: TabItem<SortByRoom>) => {
            dispatch(equipmentsActions.setRoom(tab.value))
            fetchData()
        },
        [dispatch, fetchData]
    )

    return (
        <header className={classNames(cls.EquipmentsFilters, {}, [className])}>
            <div className={cls.sorts}>
                <EquipmentsSortByStatus value={status} onChange={onChangeStatus} />
                <EquipmentsSortByRoom value={room} onChange={onChangeRoom} />
                {isAdmin && (
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button className="justify-self-end">Создать</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Создание оборудования</DialogTitle>
                                <DialogDescription></DialogDescription>
                            </DialogHeader>

                            <EditEquipmentForm
                                onSuccess={() => {
                                    setIsOpen(false)
                                    fetchData()
                                }}
                            />
                        </DialogContent>
                    </Dialog>
                )}
            </div>
            <Input className={'w-full flex-shrink-0'} placeholder="Поиск" value={search} onChange={onChangeSearch} />
        </header>
    )
}

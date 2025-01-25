import { TabsList, TabsTrigger, Tabs } from 'shared/ui/redesign/tabs'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/items'
import { type SortByRoom } from '../model/types/SortByRoom'

interface EquipmentsSortByRoomProps {
    className?: string
    value: SortByRoom
    onChange: (tab: TabItem<SortByRoom>) => void
}

export const EquipmentsSortByRoom = (props: EquipmentsSortByRoomProps) => {
    const { className, value, onChange } = props

    const onChangeTab = (value: string) => {
        const find = items.find((it) => it.value === value)
        onChange(find!)
    }

    return (
        <Tabs className={className} defaultValue={value} value={value} onValueChange={onChangeTab}>
            <TabsList>
                {items.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.content}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}

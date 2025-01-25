import { Tabs, TabsList, TabsTrigger } from 'shared/ui/redesign/tabs'
import { type TabItem } from 'shared/ui/Tabs/Tabs'
import { items } from '../model/items'
import { type SortByStatus } from '../model/types/SortByStatus'

interface EquipmentsSortByStatusProps {
    className?: string
    value: SortByStatus
    onChange: (tab: TabItem<SortByStatus>) => void
}

export const EquipmentsSortByStatus = (props: EquipmentsSortByStatusProps) => {
    const { className, onChange, value } = props

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

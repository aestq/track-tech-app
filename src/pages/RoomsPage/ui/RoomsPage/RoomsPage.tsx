import { useState } from 'react'
import { Page } from 'widgets/Page'
import { RoomsList } from 'entities/Room'
import { RoomsPageHeader } from '../RoomsPageHeader/RoomsPageHeader'

const RoomsPage = () => {
    const [isGroup, setIsGroup] = useState(false)

    return (
        <Page title="Кабинеты">
            <RoomsPageHeader setIsGroup={setIsGroup} />
            <RoomsList isGroup={isGroup} />
        </Page>
    )
}

export default RoomsPage

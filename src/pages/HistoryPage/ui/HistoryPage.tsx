import { Page } from 'widgets/Page'
import { HistoryList } from 'entities/History'

const HistoryPage = () => {
  return (
    <Page title='История'>
      <HistoryList />
    </Page>
  )
}

export default HistoryPage

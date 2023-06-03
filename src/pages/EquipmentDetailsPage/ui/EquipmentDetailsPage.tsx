import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EditEquipmentForm } from 'features/EditEquipment'

const EquipmentDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <Page title='Редактирование оборудования'>
      <EditEquipmentForm id={id} />
    </Page>
  )
}

export default EquipmentDetailsPage

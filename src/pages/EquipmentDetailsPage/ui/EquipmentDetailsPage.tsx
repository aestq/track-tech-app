import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EditEquipmentForm } from 'features/EditEquipment'
import { Text } from 'shared/ui/Text/Text'
import cls from './EquipmentDetailsPage.module.scss'

const EquipmentDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <Page
      className={cls.container}
    >
      <div>
        <Text
          title='Редактирование оборудования'
          className={cls.title}
        />
        <EditEquipmentForm id={id} />
      </div>
    </Page>
  )
}

export default EquipmentDetailsPage

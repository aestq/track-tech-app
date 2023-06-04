import { Page } from 'widgets/Page'
import { AddEquipmentForm } from 'features/AddEquipment'
import { Text } from 'shared/ui/Text/Text'
import cls from './EquipmentCreatePage.module.scss'

const EquipmentCreatePage = () => {
  return (
    <Page
      className={cls.container}
    >
      <div>
        <Text
          title='Создание оборудования'
          className={cls.title}
        />
        <AddEquipmentForm />
      </div>
    </Page>
  )
}

export default EquipmentCreatePage

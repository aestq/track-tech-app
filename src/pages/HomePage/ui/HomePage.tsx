import { Page } from 'widgets/Page'
import { EquipmentSearch } from 'features/EquipmentSearch'
import { Text } from 'shared/ui/Text/Text'
import cls from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <Page className={cls.HomePage}>
      <Text
        title='Оборудование'
      />
      <EquipmentSearch />
    </Page>
  )
}

import { Page } from 'widgets/Page'
import { EquipmentSearch } from 'features/EquipmentSearch'
import { EquipmentTable } from 'entities/Equipment'
import cls from './HomePage.module.scss'

const HomePage = () => {
  return (
    <Page title='Оборудование'>
      <EquipmentSearch />
      <EquipmentTable className={cls.table} />
    </Page>
  )
}

export default HomePage

import { useSelector } from 'react-redux'
import { EquipmentsTable } from 'entities/Equipment'
import { Text } from 'shared/ui/Text/Text'
import { getEquipmentsData } from '../../model/selectors/getEquipmentsData'
import { getEquipmentsError } from '../../model/selectors/getEquipmentsError'
import { getEquipmentsIsLoading } from '../../model/selectors/getEquipmentsIsLoading'

interface EquipmentsTableProps {
  className?: string
}

export const EquipmentsPageTable = (props: EquipmentsTableProps) => {
  const { className } = props
  const data = useSelector(getEquipmentsData)
  const isLoading = useSelector(getEquipmentsIsLoading)
  const error = useSelector(getEquipmentsError)

  if(error) {
    return (
      <Text
        text='Произошла ошибка при загрузке оборудования'
        theme='error'
      />
    )
  }

  return (
    <EquipmentsTable
      className={className}
      isLoading={isLoading}
      items={data}
    />
  )
}

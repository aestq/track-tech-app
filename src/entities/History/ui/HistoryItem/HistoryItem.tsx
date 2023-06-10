import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import cls from './HistoryItem.module.scss'

interface HistoryItemProps {
  className?: string
}

export const HistoryItem = (props: HistoryItemProps) => {
  const { className } = props

  return (
    <Card
      className={classNames(cls.HistoryItem, {}, [className])}
      theme='border'
    >
      <div className={cls.block}>
        <Text
          title='Ноутбук Lenovo'
          size='s'
        />
        <Text
          text='Номер: 102848734734'
          size='s'
        />
      </div>
      <div className={cls.block}>
        <div className={cls.moving}>
          <Text
            text='310'
          />
          {'==>'}
          <Text
            text='214'
          />
        </div>
        <Text
          text='06.06.2023 17:16:10'
          size='s'
        />
      </div>
    </Card>
  )
}

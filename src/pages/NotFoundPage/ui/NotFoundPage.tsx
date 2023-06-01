import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={cls.NotFoundPage}>
      <Card className={cls.card} theme='secondary'>
        <Text
          className={cls.text}
          title='404'
          text='Страница не найдена'
          align='center'
        />
      </Card>
    </div>
  )
}

import { Spinner } from 'shared/ui/Spinner/Spinner'
import cls from './PageLoader.module.scss'

export const PageLoader = () => {
  return (
    <div className={cls.PageLoader}>
      <Spinner size='l'/>
    </div>
  )
}

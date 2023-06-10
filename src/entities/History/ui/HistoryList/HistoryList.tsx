import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getHistoryData } from 'entities/History/model/selectors/getHistoryData'
import { getHistoryError } from 'entities/History/model/selectors/getHistoryError'
import { getHistoryIsLoading } from 'entities/History/model/selectors/getHistoryIsLoading'
import { fetchStories } from 'entities/History/model/services/fetchStories'
import { historyReducer } from 'entities/History/model/slice/historySlice'
import { type History } from 'entities/History/model/types/HistorySchema'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import { HistoryItem } from '../HistoryItem/HistoryItem'
import cls from './HistoryList.module.scss'

interface HistoryListProps {
  className?: string
}

const reducersList: ReducersList = {
  history: historyReducer
}

export const HistoryList = (props: HistoryListProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const stories = useSelector(getHistoryData)
  const isLoading = useSelector(getHistoryIsLoading)
  const error = useSelector(getHistoryError)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchStories())
  })

  const render = useCallback((history: History) => (
    <HistoryItem
      history={history}
      key={history.id}
    />
  ), [])

  if(isLoading) {
    return (
      <div className={cls.HistoryList}>
        <Skeleton width='100%' height={62} />
        <Skeleton width='100%' height={62} />
        <Skeleton width='100%' height={62} />
        <Skeleton width='100%' height={62} />
      </div>
    )
  }

  if(error) {
    return (
      <Text
        text='Произошла ошибка при подгрузке истории'
        theme='error'
      />
    )
  }

  return (
    <div className={classNames(cls.HistoryList, {}, [className])}>
      {stories?.map(render)}
    </div>
  )
}

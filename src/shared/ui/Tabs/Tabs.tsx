import { memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
  content: ReactNode
  value: string
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onChange: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onChange
  } = props

  const onClickTab = useCallback((tab: TabItem) => {
    return () => {
      onChange(tab)
    }
  }, [onChange])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? 'secondary' : 'border'}
          onClick={onClickTab(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})

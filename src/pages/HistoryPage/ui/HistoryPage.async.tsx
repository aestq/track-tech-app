import { lazy } from 'react'

export const HistoryPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./HistoryPage'))
  }, 1000)
}))

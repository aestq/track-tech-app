import { lazy } from 'react'

export const EntryPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./EntryPage'))
  }, 1000)
}))

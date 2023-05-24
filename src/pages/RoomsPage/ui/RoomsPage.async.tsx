import { lazy } from 'react'

export const RoomsPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./RoomsPage'))
  }, 1000)
}))

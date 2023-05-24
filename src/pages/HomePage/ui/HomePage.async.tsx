import { lazy } from 'react'

export const HomePageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./HomePage'))
  }, 1000)
}))

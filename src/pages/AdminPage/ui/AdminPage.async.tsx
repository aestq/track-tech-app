import { lazy } from 'react'

export const AdminPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./AdminPage'))
  }, 1000)
}))

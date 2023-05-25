import { lazy } from 'react'

export const EquipmentsPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./EquipmentsPage'))
  }, 1000)
}))

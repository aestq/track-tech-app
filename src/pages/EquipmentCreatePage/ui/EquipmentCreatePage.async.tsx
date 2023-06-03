import { lazy } from 'react'

export const EquipmentCreatePageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./EquipmentCreatePage'))
  }, 1000)
}))

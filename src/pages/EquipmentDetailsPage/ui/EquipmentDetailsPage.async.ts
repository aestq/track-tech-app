import { lazy } from 'react'

export const EquipmentDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./EquipmentDetailsPage'))
  }, 1000)
}))

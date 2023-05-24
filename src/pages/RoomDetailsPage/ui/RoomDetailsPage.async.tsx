import { lazy } from 'react'

export const RoomDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./RoomDetailsPage'))
  }, 1000)
}))

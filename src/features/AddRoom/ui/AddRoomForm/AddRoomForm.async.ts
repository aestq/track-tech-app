import { type FC, lazy } from 'react'
import { type AddRoomFormProps } from './AddRoomForm'

export const AddRoomFormAsync = lazy<FC<AddRoomFormProps>>(
  async () => await new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./AddRoomForm'))
    }, 1000)
  })
)

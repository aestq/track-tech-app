import { type FC, lazy } from 'react'
import { type AddEquipmentFormProps } from '../AddEquipmentForm/AddEquipmentForm'

export const AddEquipmentFormAsync = lazy<FC<AddEquipmentFormProps>>(
  async () => await new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./AddEquipmentForm'))
    }, 1000)
  }))

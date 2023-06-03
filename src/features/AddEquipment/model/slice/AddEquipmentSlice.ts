import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Equipment } from 'entities/Equipment'
import { type AddEquipmentSchema } from '../types/AddEquipmentSchema'

const initialState: AddEquipmentSchema = {
  formData: {
    name: '',
    status: 'use',
    stockNumber: '',
    room: '',
    specifications: ''
  },
  isLoading: false
}

export const addEquipmentSlice = createSlice({
  name: 'addEquipment',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Equipment>) => {
      state.formData = { ...state.formData, ...action.payload }
    }
  }
})

export const { reducer: addEquipmentReducer } = addEquipmentSlice
export const { actions: addEquipmentActions } = addEquipmentSlice

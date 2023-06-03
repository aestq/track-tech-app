import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Equipment } from 'entities/Equipment'
import { createEquipment } from '../services/createEquipment'
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
  },
  extraReducers: (builder) => {
    builder.addCase(createEquipment.fulfilled, (state) => {
      state.formData = {
        name: '',
        status: 'use',
        stockNumber: '',
        room: '',
        specifications: ''
      }
      state.isLoading = false
    })
    builder.addCase(createEquipment.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    builder.addCase(createEquipment.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
  }
})

export const { reducer: addEquipmentReducer } = addEquipmentSlice
export const { actions: addEquipmentActions } = addEquipmentSlice

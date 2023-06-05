import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { deleteEquipment } from 'features/EditEquipment/model/services/deleteEquipment'
import { type Equipment } from 'entities/Equipment'
import { fetchEquipment } from '../services/fetchEquipment'
import { updateEquipment } from '../services/updateEquipment'
import { type EditEquipmentSchema } from '../types/EditEquipmentSchema'

const initialState: EditEquipmentSchema = {
  isLoading: false,
  init: false
}

export const editEquipmentSlice = createSlice({
  name: 'editEquipment',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Equipment>) => {
      state.formData = { ...state.formData, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEquipment.pending, (state) => {
      state.init = false
      state.error = undefined
    })
    builder.addCase(fetchEquipment.fulfilled, (state, action) => {
      state.init = true
      state.formData = action.payload
    })
    builder.addCase(fetchEquipment.rejected, (state, action) => {
      state.init = true
      state.error = action.payload
    })
    builder.addCase(updateEquipment.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(updateEquipment.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    builder.addCase(updateEquipment.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(deleteEquipment.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(deleteEquipment.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    builder.addCase(deleteEquipment.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
  }
})

export const { reducer: editEquipmentReducer } = editEquipmentSlice
export const { actions: editEquipmentActions } = editEquipmentSlice

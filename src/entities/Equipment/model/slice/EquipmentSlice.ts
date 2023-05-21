import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { items } from '../items'
import { type EquipmentSchema } from '../types/equipmentSchema'

const initialState: EquipmentSchema = {
  isOpen: false
}

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItem = items.find((item) => action.payload === item.id)
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { reducer: equipmentReducer } = equipmentSlice
export const { actions: equipmentActions } = equipmentSlice

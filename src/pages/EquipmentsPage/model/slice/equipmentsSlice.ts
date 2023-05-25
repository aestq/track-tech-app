import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchEquipmentsService } from '../services/fetchEquipmentsService'
import { type EquipmentsSchema } from '../types/EquipmentsSchema'

const initialState: EquipmentsSchema = {
  isOpen: false,
  isLoading: false
}

const equipmentsSlice = createSlice({
  name: 'equipments',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItem = undefined
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEquipmentsService.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchEquipmentsService.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchEquipmentsService.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: equipmentsReducer } = equipmentsSlice
export const { actions: equipmentsActions } = equipmentsSlice

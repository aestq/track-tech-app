import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { SortByRoom } from 'features/EquipmentsSortByRoom'
import { SortByStatus } from 'features/EquipmentsSortByStatus'
import { fetchEquipmentsService } from '../services/fetchEquipmentsService'
import { type EquipmentsSchema } from '../types/EquipmentsSchema'

const initialState: EquipmentsSchema = {
  isLoading: false,
  search: '',
  status: SortByStatus.ALL,
  room: SortByRoom.ALL
}

const equipmentsSlice = createSlice({
  name: 'equipments',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setStatus: (state, action: PayloadAction<SortByStatus>) => {
      state.status = action.payload
    },
    setRoom: (state, action: PayloadAction<SortByRoom>) => {
      state.room = action.payload
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

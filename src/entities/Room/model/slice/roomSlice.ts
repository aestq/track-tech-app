import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchRoomsService } from 'entities/Room/model/services/fetchRoomsService'
import { type Room, type RoomSchema } from '../types/roomSchema'

const initialState: RoomSchema = {
  isLoading: false
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoomsService.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchRoomsService.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchRoomsService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: roomReducer } = roomSlice
export const { actions: roomActions } = roomSlice

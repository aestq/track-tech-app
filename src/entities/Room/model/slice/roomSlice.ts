import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchRooms } from 'entities/Room/model/services/fetchRooms'
import { type Room, type RoomSchema } from '../types/roomSchema'

const initialState: RoomSchema = {
  isLoading: false
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<Room>) => {
      state.data?.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchRooms.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: roomReducer } = roomSlice
// For public api
export const { setRooms } = roomSlice.actions

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { createRoom } from '../services/createRoom'
import { type AddRoomSchema } from '../types/AddRoomSchema'

const initialState: AddRoomSchema = {
  isLoading: false,
  number: ''
}

export const addRoomSlice = createSlice({
  name: 'addRoom',
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createRoom.fulfilled, (state) => {
      state.isLoading = false
      state.number = ''
    })
    builder.addCase(createRoom.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(createRoom.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: addRoomReducer } = addRoomSlice
export const { actions: addRoomActions } = addRoomSlice

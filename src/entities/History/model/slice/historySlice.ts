import { createSlice } from '@reduxjs/toolkit'
import { fetchStories } from '../services/fetchStories'
import { type HistorySchema } from '../types/HistorySchema'

const initialState: HistorySchema = {
  isLoading: false
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchStories.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: historyReducer } = historySlice
export const { actions: historyActions } = historySlice

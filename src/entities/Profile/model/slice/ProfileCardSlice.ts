import { createSlice } from '@reduxjs/toolkit'
import { logoutUser } from '../services/logoutUser'
import { type ProfileCardSchema } from '../types/ProfileCardSchema'

const initialState: ProfileCardSchema = {
  isLoading: false
}

const profileCardSlice = createSlice({
  name: 'profileCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: profileCardReducer } = profileCardSlice

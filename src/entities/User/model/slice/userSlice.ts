import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { logoutService } from '../services/logoutService'
import { refreshService } from '../services/refreshService'
import { type User, type UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
  isLoading: false,
  _init: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload
    },
    logout: (state) => {
      state.userData = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(logoutService.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logoutService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(refreshService.fulfilled, (state) => {
      state._init = true
    })
    builder.addCase(refreshService.rejected, (state) => {
      state._init = true
    })
  }
})

export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice

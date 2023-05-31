import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { refreshService } from '../services/refreshService'
import { type User, type UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
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

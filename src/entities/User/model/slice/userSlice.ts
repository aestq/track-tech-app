import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { refreshUser } from '../services/refreshUser'
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
      state._init = true
    },
    logout: (state) => {
      state.userData = undefined
    },
    setInit: (state, action: PayloadAction<boolean>) => {
      state._init = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(refreshUser.fulfilled, (state) => {
      state._init = true
    })
    builder.addCase(refreshUser.rejected, (state) => {
      state._init = true
    })
  }
})

export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice

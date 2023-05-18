import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { signupService } from '../services/signupService'
import { type SignupSchema } from '../types/signupSchema'

const initialState: SignupSchema = {
  login: '',
  name: '',
  password: '',
  isLoading: false
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(signupService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(signupService.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(signupService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: signupReducer } = signupSlice
export const { actions: signupActions } = signupSlice

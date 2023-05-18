import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loginService } from 'features/LoginForm/model/services/loginService'
import { type LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  login: '',
  password: '',
  isLoading: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(loginService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(loginService.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(loginService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: loginReducer } = loginSlice
export const { actions: loginActions } = loginSlice

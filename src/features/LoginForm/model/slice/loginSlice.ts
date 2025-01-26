import { createSlice } from '@reduxjs/toolkit'
import { loginService } from 'features/LoginForm/model/services/loginService'
import { type LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
    isLoading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
    },
})

export const { reducer: loginReducer } = loginSlice

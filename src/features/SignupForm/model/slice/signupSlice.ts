import { createSlice } from '@reduxjs/toolkit'
import { signupService } from '../services/signupService'
import { type SignupSchema } from '../types/signupSchema'

const initialState: SignupSchema = {
    isLoading: false,
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
    },
})

export const { reducer: signupReducer } = signupSlice

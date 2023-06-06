import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { changeRole } from 'pages/AdminPage/model/services/changeRole'
import { fetchUsers } from '../services/fetchUsers'
import { type AdminSchema } from '../types/AdminSchema'

const initialState: AdminSchema = {
  isLoading: false,
  search: ''
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    builder.addCase(changeRole.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(changeRole.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(changeRole.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: adminReducer } = adminSlice
export const { actions: adminActions } = adminSlice

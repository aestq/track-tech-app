import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type UserRoles } from 'entities/User'

interface ChangeRoleProps {
  value: UserRoles
  userId: number
}

export const changeRole = createAsyncThunk<void, ChangeRoleProps, ThunkConfig<string>>(
  'admin/changeRole',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      await extra.api.post<void>('/users/role', args)
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

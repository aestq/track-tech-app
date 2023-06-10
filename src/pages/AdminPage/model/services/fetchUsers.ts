import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { getAdminSearch } from 'pages/AdminPage/model/selectors/getAdminSearch'
import { type User } from 'entities/User'

export const fetchUsers = createAsyncThunk<User[], void, ThunkConfig<string>>(
  'admin/fetchUsers',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const search = getAdminSearch(getState())
    try {
      const response = await extra.api.get<User[]>('/users', {
        params: {
          search
        }
      })

      return response.data
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

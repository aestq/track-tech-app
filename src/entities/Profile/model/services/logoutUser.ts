import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { userActions } from 'entities/User'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'

export const logoutUser = createAsyncThunk<void, void, ThunkConfig<string>>(
  'profileCard/logoutUser',
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI
    try {
      await extra.api.post('/auth/logout')
      dispatch(userActions.logout())
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

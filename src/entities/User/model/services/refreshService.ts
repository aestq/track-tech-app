import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'
import { userActions } from '../slice/userSlice'
import { type User, type UserData } from '../types/UserSchema'

export const refreshService = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/refreshService',
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI

    if(!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
      return rejectWithValue('Не авторизован')
    }

    try {
      const response = await extra.api.get<UserData>('/auth/refresh')

      dispatch(userActions.setUserData(response.data.user))
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)

      return response.data.user
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

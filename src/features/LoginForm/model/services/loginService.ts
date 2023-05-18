import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type User, userActions } from 'entities/User'
import { type UserData } from 'entities/User/model/types/UserSchema'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'
import { getLoginFormLogin } from '../selectors/getLoginFormLogin'
import { getLoginFormPassword } from '../selectors/getLoginFormPassword'

export const loginService = createAsyncThunk<User, void, ThunkConfig<string>>(
  'loginForm/loginService',
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI
    const login = getLoginFormLogin(getState())
    const password = getLoginFormPassword(getState())
    try {
      const response = await extra.api.post<UserData>('/auth/login', { login, password })
      dispatch(userActions.setUserData(response.data.user))
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)

      return response.data.user
    } catch(error) {
      if(isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

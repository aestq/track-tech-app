import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type User, userActions } from 'entities/User'
import { type UserData } from 'entities/User/model/types/UserSchema'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'
import { getSignupFormLogin } from '../selectors/getSignupFormLogin'
import { getSignupFormName } from '../selectors/getSignupFormName'
import { getSignupFormPassword } from '../selectors/getSignupFormPassword'

export const signupService = createAsyncThunk<User, void, ThunkConfig<string>>(
  'signupForm/signupService',
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI
    const login = getSignupFormLogin(getState())
    const name = getSignupFormName(getState())
    const password = getSignupFormPassword(getState())

    try {
      const response = await extra.api.post<UserData>('/auth/signup', {
        login, name, password
      })

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

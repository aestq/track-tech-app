import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type LoginFormSchema } from 'features/LoginForm/lib/schema'
import { type User, userActions } from 'entities/User'
import { type UserData } from 'entities/User/model/types/UserSchema'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'

export const loginService = createAsyncThunk<User, LoginFormSchema, ThunkConfig<string>>(
    'loginForm/loginService',
    async (formData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.post<UserData>('/auth/login', formData)

            dispatch(userActions.setUserData(response.data.user))
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)
            return response.data.user
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message)
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

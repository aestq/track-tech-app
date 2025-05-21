import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type LoginFormSchema } from 'features/LoginForm/lib/schema'
import { refreshUser } from 'entities/User'
import { type UserData } from 'entities/User/model/types/UserSchema'
import { LOCAL_STORAGE_REFRESH_TOKEN_KEY, LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'

export const loginService = createAsyncThunk<string, LoginFormSchema, ThunkConfig<string>>(
    'loginForm/loginService',
    async (formData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.post<UserData>('/auth/login', formData)
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)
            localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, response.data.refreshToken)

            dispatch(refreshUser())

            return response.data.accessToken
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message)
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

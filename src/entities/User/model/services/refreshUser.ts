import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'
import { userActions } from '../slice/userSlice'
import { type User } from '../types/UserSchema'

export const refreshUser = createAsyncThunk<User, void, ThunkConfig<string>>('user/refreshUser', async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI

    if (!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) {
        return rejectWithValue('Не авторизован')
    }

    try {
        const response = await extra.api.get<User>('/users/my')
        dispatch(userActions.setUserData(response.data))
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.message)
        }
        return rejectWithValue('Произошла неизвестная ошибка')
    }
})

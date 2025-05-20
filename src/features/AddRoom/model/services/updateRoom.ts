import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Room } from 'entities/Room'

export const updateRoom = createAsyncThunk<void, { num: number; id: number }, ThunkConfig<string>>(
    'addRoom/updateRoom',
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI
        const { num, id } = args

        try {
            const response = await extra.api.patch<Room>(`/rooms/${id}`, { number: num })
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message)
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

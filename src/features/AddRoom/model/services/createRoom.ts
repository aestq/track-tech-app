import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Room, setRooms } from 'entities/Room'
import { fetchRooms } from 'entities/Room/model/services/fetchRooms'

export const createRoom = createAsyncThunk<void, number, ThunkConfig<string>>('addRoom/createRoom', async (num, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI

    try {
        const response = await extra.api.post<Room>('/rooms', { number: num })
    } catch (error) {
        if (isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.message)
        }
        return rejectWithValue('Произошла неизвестная ошибка')
    }
})

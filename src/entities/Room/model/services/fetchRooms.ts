import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Room } from 'entities/Room/model/types/roomSchema'

export const fetchRooms = createAsyncThunk<Room[], void, ThunkConfig<string>>(
  'room/fetchRooms',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Room[]>('/rooms')
      return response.data
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

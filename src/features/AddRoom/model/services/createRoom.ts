import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Room, setRooms } from 'entities/Room'
import { getAddRoomNumber } from '../selectors/getAddRoomNumber'

export const createRoom = createAsyncThunk<void, void, ThunkConfig<string>>(
  'addRoom/createRoom',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const number = getAddRoomNumber(getState())
    try {
      const response = await extra.api.post<Room>('/rooms', { number })
      dispatch(setRooms(response.data))
    } catch(error) {
      if(isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

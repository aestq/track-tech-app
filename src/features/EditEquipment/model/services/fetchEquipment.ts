import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Equipment } from 'entities/Equipment'

export const fetchEquipment = createAsyncThunk<Equipment, string, ThunkConfig<string>>(
  'editEquipment/fetchEquipment',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Equipment>(`/equipments/${id}`)
      return response.data
    } catch(error) {
      if(isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

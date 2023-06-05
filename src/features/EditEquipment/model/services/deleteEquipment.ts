import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Equipment } from 'entities/Equipment'

export const deleteEquipment = createAsyncThunk<void, string, ThunkConfig<string>>(
  'editEquipment/deleteEquipment',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      await extra.api.delete<Equipment>(`/equipments/${id}`)
    } catch(error) {
      if(isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

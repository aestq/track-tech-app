import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Equipment } from 'entities/Equipment'
import { getAddEquipmentFormData } from '../selectors/getAddEquipmentFormData'

export const createEquipment = createAsyncThunk<void, void, ThunkConfig<string>>(
  'addEquipment/createEquipment',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const formData = getAddEquipmentFormData(getState())
    try {
      await extra.api.post<Equipment>('/equipments', formData)
    } catch(error) {
      if(isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

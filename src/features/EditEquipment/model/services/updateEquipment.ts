import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Equipment } from 'entities/Equipment'
import { getEditEquipmentFormData } from '../selectors/getEditEquipmentFormData'

export const updateEquipment = createAsyncThunk<void, void, ThunkConfig<string>>(
  'editEquipment/updateEquipment',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const formData = getEditEquipmentFormData(getState())
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

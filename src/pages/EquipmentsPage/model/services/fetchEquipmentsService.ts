import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { type Equipment } from 'entities/Equipment'
import { addQueryParams } from 'shared/lib/helpers/addQueryParams'
import { getEquipmentsSearch } from '../selectors/getEquipmentsSearch'

export const fetchEquipmentsService = createAsyncThunk<Equipment[], void, ThunkConfig<string>>(
  'equipments/fetchEquipmentsService',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const search = getEquipmentsSearch(getState())

    addQueryParams({
      search
    })

    try {
      const response = await extra.api.get<Equipment[]>(`/equipments?search=${search}`)
      return response.data
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

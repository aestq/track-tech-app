import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { SortByStatus } from 'features/EquipmentsSortByStatus'
import { type Equipment } from 'entities/Equipment'
import { addQueryParams } from 'shared/lib/helpers/addQueryParams'
import { getEquipmentsSearch } from '../selectors/getEquipmentsSearch'
import { getEquipmentsStatus } from '../selectors/getEquipmentsStatus'

export const fetchEquipmentsService = createAsyncThunk<Equipment[], void, ThunkConfig<string>>(
  'equipments/fetchEquipmentsService',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const search = getEquipmentsSearch(getState())
    const status = getEquipmentsStatus(getState())

    addQueryParams({
      search,
      status
    })

    try {
      const response = await extra.api.get<Equipment[]>('/equipments', {
        params: {
          search,
          status: status === SortByStatus.ALL ? undefined : status
        }
      })

      return response.data
    } catch(error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message)
      }
      return rejectWithValue('Произошла неизвестная ошибка')
    }
  }
)

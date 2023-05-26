import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/Store'
import { equipmentsActions } from 'pages/EquipmentsPage/model/slice/equipmentsSlice'
import { fetchEquipmentsService } from './fetchEquipmentsService'

export const initEquipmentsService = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'equipments/initEquipmentsService',
  async (searchParams, thunkAPI) => {
    const { dispatch } = thunkAPI
    const search = searchParams.get('search')
    if(search) {
      dispatch(equipmentsActions.setSearch(search))
    }
    dispatch(fetchEquipmentsService())
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type ThunkConfig } from 'app/providers/Store'
import { SortByRoom } from 'features/EquipmentsSortByRoom'
import { SortByStatus } from 'features/EquipmentsSortByStatus'
import { type Equipment } from 'entities/Equipment'
import { addQueryParams } from 'shared/lib/helpers/addQueryParams'
import { getEquipmentsRoom } from '../selectors/getEquipmentsRoom'
import { getEquipmentsSearch } from '../selectors/getEquipmentsSearch'
import { getEquipmentsStatus } from '../selectors/getEquipmentsStatus'

interface Args {
    invalidate?: boolean
}

export const fetchEquipments = createAsyncThunk<Equipment[], Args, ThunkConfig<string>>(
    'equipments/fetchEquipments',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const search = getEquipmentsSearch(getState())
        const status = getEquipmentsStatus(getState())
        const room = getEquipmentsRoom(getState())

        try {
            const response = await extra.api.get<Equipment[]>('/equipments', {
                params: {
                    search,
                    status: status === SortByStatus.ALL ? undefined : status,
                    room: room === SortByRoom.ALL ? undefined : room,
                },
            })

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message)
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

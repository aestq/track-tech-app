import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'
import type { ThunkConfig } from 'app/providers/Store'
import { type EditEquipmentSchema } from 'features/EditEquipment/lib/schema'
import type { Equipment } from 'entities/Equipment'

export const createEquipment = createAsyncThunk<void, EditEquipmentSchema, ThunkConfig<string>>(
    'editEquipment/createEquipment',
    async (formData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI
        try {
            await extra.api.post<Equipment>('/equipments', formData)
            toast.success('Оборудование создано')
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message)
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

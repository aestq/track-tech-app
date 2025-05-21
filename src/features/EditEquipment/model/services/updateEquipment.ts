import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'
import { type ThunkConfig } from 'app/providers/Store'
import type { EditEquipmentSchema } from 'features/EditEquipment/lib/schema'
import { type Equipment } from 'entities/Equipment'
import { getEditEquipmentFormData } from '../selectors/getEditEquipmentFormData'

interface UpdateEquipmentArgs extends EditEquipmentSchema {
    id: number
}

export const updateEquipment = createAsyncThunk<void, UpdateEquipmentArgs, ThunkConfig<string>>(
    'editEquipment/updateEquipment',
    async (formData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            await extra.api.put<Equipment>('/equipments', formData)
            toast.success('Оборудование изменено')
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message ?? 'Произошла неизвестная ошибка')
            }
            return rejectWithValue('Произошла неизвестная ошибка')
        }
    }
)

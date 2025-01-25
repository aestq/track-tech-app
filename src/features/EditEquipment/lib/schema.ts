import { z } from 'zod'

export const editEquipmentSchema = z.object({
    name: z.string().min(1, 'Поле обязательно'),
    stockNumber: z.string().min(1, 'Поле обязательно'),
    status: z.string().min(1, 'Поле обязательно'),
    specifications: z.string(),
    roomId: z.number().nullable(),
})

export type EditEquipmentSchema = z.infer<typeof editEquipmentSchema>

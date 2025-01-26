import { z } from 'zod'

export const loginFormSchema = z.object({
    login: z.string().min(1, 'Поле обязательно').min(3, 'От 3 символов'),
    password: z.string().min(1, 'Поле обязательно').min(8, 'От 8 символов'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

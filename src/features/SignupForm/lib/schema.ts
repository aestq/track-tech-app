import { z } from 'zod'

export const signUpFormSchema = z.object({
    login: z.string().min(1, 'Поле обязательно').min(3, 'От 3 символов'),
    name: z.string().min(1, 'Поле обязательно'),
    password: z.string().min(1, 'Поле обязательно').min(8, 'От 8 символов'),
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

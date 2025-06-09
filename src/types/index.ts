import { z } from 'zod'

export const loginSchema = z.object({
  login: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório')
})

export type LoginPayload = z.infer<typeof loginSchema>

export type * from './auth';
export type * from './user';
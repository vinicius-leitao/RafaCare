import axios, { AxiosError } from 'axios'
import { LoginPayload } from '@/types'

export async function loginReq(data: LoginPayload) {
    try {
        const response = await axios.post('/api/auth/login', data)
        
        return response.data

    } catch (error: unknown) {

        if (error instanceof AxiosError) return error;

    }
    
}
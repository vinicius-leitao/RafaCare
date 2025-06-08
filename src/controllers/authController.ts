import { LoginPayload } from '@/types';
import { AuthService } from '@/services/authService';

export async function authenticate({ login, password }: LoginPayload) {
    
    if (!login || !password) {
        throw new Error('Login e senha são obrigatórios.');
    }

    return await AuthService.login({ login, password });
}

export async function logoutUser() {
    return await AuthService.logout()
}
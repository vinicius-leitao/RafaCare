import { CreateUserPayload } from '@/types';
import { UserService } from '@/services/api/userService';

export async function createUser({ cpf, name, email, password }: CreateUserPayload) {
    
    if (!cpf || !email || !password || !name) {
        throw new Error('Todos os campos são obrigatórios.');
    }

    return await UserService.createUser({cpf, name, email, password });
}
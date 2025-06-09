import { CreateUserPayload } from '@/types';
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt';

export const UserService = {

    async createUser({ name, cpf, email, password }: CreateUserPayload) {
        
    // Aprender a tipar o Prisma
    const userAlreadyExists = await prisma.user.findUnique({ where: { email } })
    
    if (userAlreadyExists) throw new Error('Usuário já existe.');
    
    // Entender o que é SaltOrRounds (número 10 do segundo parâmetro da função);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            cpf,
            email,
            name,
            password: hashedPassword
        }
    })

    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
    }
}
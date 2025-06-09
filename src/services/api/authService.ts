import { LoginPayload } from '@/types';
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const AuthService = {

    async login({ login, password }: LoginPayload) {
        
        // Aprender a tipar o Prisma
        const user = await prisma.user.findUnique({ where: { cpf: login } })
    
        if (!user) throw new Error('E-mail ou senha inválidos.');
        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) throw new Error('E-mail ou senha inválidos.');
    
        
        // Criar token JWT
        const sessionId = jwt.sign({
            id: user.id,
            email: user.email
        },
        JWT_SECRET,
        {expiresIn: '1d'} // Um dia de validade
        )
        
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            sessionId
        }
    },
    async logout(){

        const cookiesStore = await cookies();

        cookiesStore.set('sessionId', '', {
            httpOnly: true,
            path: '/',
            expires: new Date(0)
        });
    }
}
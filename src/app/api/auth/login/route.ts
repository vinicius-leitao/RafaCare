import { authenticate } from '@/controllers/authController'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    
    try {
        const body = await request.json();
        const {sessionId, ...user} = await authenticate(body);

        const cookieStore = await cookies();

        cookieStore.set('sessionId', sessionId, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 // 1 dia
        })


        return NextResponse.json({ message: 'Login realizado com sucesso', user }, { status: 200 })

    } catch (error: unknown) {

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 401 })
        }

        return NextResponse.json({ error: 'Erro interno inesperado.' }, { status: 500 })

    }
}
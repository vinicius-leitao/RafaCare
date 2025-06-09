import { createUser } from "@/controllers/userController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    try {
        
        const body = await request.json();
        const user = await createUser(body);

        return NextResponse.json({ message: 'Usuário criado com sucesso', user }, { status: 201 })
        
    } catch (error: unknown) {
        
        if(error instanceof Error) return NextResponse.json({error: error.message || 'Erro interno'}, {status: 500})

        
        return NextResponse.json({error: 'Erro interno inesperado.'}, {status: 500})
    }
}
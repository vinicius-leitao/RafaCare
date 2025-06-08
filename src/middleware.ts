import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string;

const publicRoutes = [ '/login', '/register'];

export function middleware(request: NextRequest) {
    
    const { pathname } = request.nextUrl;
    const sessionId = request.cookies.get('sessionId')?.value;

    if (publicRoutes.includes(pathname)) return NextResponse.next();

    if (!sessionId) return NextResponse.redirect(new URL('/login', request.url))
    
    try {
        
        jwt.verify(sessionId, JWT_SECRET);
        return NextResponse.next();

    } catch (error) {
        
        console.error('JWT Inválido', error);
        return NextResponse.redirect(new URL('/login', request.url))

    }

}

export const config = {
  matcher: [
    // Aplica o middleware apenas às rotas protegidas
    '/',
    '/dashboard/:path*',
    '/profile/:path*',
    '/patients/:path*'
  ]
}

import { logoutUser } from '@/controllers/authController'
import { NextResponse } from 'next/server'

export async function POST() {
  const result = logoutUser()
    
  return NextResponse.json(result, { status: 200 })
}
'use client'

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from '@tanstack/react-query'
import { loginReq } from "@/services/client/authService";
import { LoginPayload, loginSchema } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from "@/store/authStore";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const setUser = useAuthStore(state => state.setUser)
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
        resolver: zodResolver(loginSchema)
    })

    const { mutate } = useMutation({
        mutationFn: loginReq,
        onSuccess: (data) => {


            setUser(data.user)

            router.push('/dashboard');
        },
        onError: (err: unknown) => {

            if (err instanceof AxiosError) return console.error(err.response?.data?.error || 'Erro ao fazer login')
        }
    })

    const onSubmit = (data: LoginPayload) => mutate(data)

    return (
        <main className=" min-h-screen">
            <Header />
            <div className="flex flex-col align-middle items-center">
                <div className="w-1/4" >
                    {/* Estudar a recomendação aqui */}
                    <img alt="#" src='images/banner.jpg' />
                </div>
                <h1>Bem-vindo(a)!</h1>
                <div className="flex w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="login">Login</Label>
                                <Input {...register('login')} placeholder="Insira o seu login" />
                                {errors.login && <p>{errors.login.message}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input   {...register('password')} placeholder="Insira sua senha" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <Button variant='link'>Esqueceu sua senha?</Button>
                            <Button type="submit" variant='default'>Entrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
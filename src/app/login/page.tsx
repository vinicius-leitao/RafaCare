import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
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
                    <form className="flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="login">Login</Label>
                                <Input id='login' name='login' placeholder="Insira o seu login" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="login">Senha</Label>
                                <Input id='login' name='login' placeholder="Insira sua senha" />
                            </div>
                            <Button variant='link'>Esqueceu sua senha?</Button>
                            <Button variant='default'>Entrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
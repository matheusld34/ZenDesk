import { Container } from "@/app/components/container";
import Link from "next/link";


export function DashboardHeader() {
    return (
        <Container>
            <header className="w-full bg-cyan-400 my-4 p-3 rounded flex gap-4 items-center">
                <Link href="/dashboard" className="text-2xl font-bold hover:tracking-widest duration-300">
                    Chamados
                </Link>
                <Link href="/dashboard/customer" className="text-2xl font-bold hover:tracking-widest duration-300">
                    Clientes
                </Link>
            </header>

        </Container>
    )
}
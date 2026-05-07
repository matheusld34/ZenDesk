
import { Container } from "@/app/components/container"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/")
    }


    return (
        <Container>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-4 text-gray-600">Bem-vindo ao seu dashboard, {session?.user?.name}!</p>
        </Container>
    )

}
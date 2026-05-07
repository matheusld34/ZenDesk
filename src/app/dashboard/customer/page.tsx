import { Container } from "@/app/components/container";
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Customer() {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/")
    }

    return (
        <Container>
            <main>
                <div>
                    <h1 className="text-3xl font-bold">Clientes</h1>
                </div>
            </main>

        </Container>
    )
}
"use client"

import Link from "next/link"

import { signIn, signOut, useSession } from "next-auth/react"
import { FiLoader, FiUser } from "react-icons/fi"

export function Header() {

    const { status, data } = useSession();

    async function handleLogin() {
        await signIn();
    }

    async function handleLogout() {
        await signOut();
    }
    return (
        <header className="w-full h-16 bg-cyan-500 px-3 py-4 text-white flex items-center justify-between shadow-2xl">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-baseline justify-center gap-4">
                    <Link href="/" className="">
                        <h1 className="font-bold text-2xl hover:tracking-widest duration-300"><span className="font-bold text-green-400">Z</span><span className="font-bold text-red-400">e</span><span className="font-bold text-yellow-500">n</span>desk</h1>
                    </Link>
                    <Link href="/about" className="hover:tracking-widest duration-300">
                        <h1 className="font-bold ">Sobre Nós</h1>
                    </Link>
                </div>

                {status === "loading" && (
                    <button>
                        <FiLoader className="animate-spin" size={20} color="#4b5563" />
                    </button>
                )}
                {status === "unauthenticated" && (
                    <button onClick={handleLogin} className="bg-white text-cyan-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-2xl px-2 duration-500">
                        Login
                    </button>
                )}
                {status === "authenticated" && (
                    <div className=" flex items-baseline gap-4">
                        <Link href="/profile" className="flex items-center gap-1 hover:tracking-widest duration-300">
                            <FiUser size={20} color="#4b5563" />
                            <span>{data.user?.name}</span>
                        </Link>
                        <button onClick={handleLogout} className="bg-white text-cyan-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-2xl px-2 duration-500">
                            Logout
                        </button>
                    </div>
                )}




            </div>
        </header>
    )
}
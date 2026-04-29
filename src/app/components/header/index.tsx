

import Link from "next/link"

export function Header() {
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



                <div className="flex items-center space-x-4">
                    <Link href="/login" className="hover:tracking-widest duration-300">
                        Login
                    </Link>

                </div>
            </div>
        </header>
    )
}
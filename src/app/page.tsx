import Image from "next/image";
import Logo from "../../public/zendesk.png"

export default function Home() {
  return (
    <main className="w-full flex flex-col md:flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row">
        <div className="flex flex-1 items-center justify-center">

          <Image src={Logo} alt="Zendesk Logo" width={1000} height={1000} />

        </div>
        <div className="flex flex-1 h-180 justify-center items-center bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl hover:tracking-widest duration-300"><span className="font-bold text-green-400">Z</span><span className="font-bold text-red-400">e</span><span className="font-bold text-yellow-500">n</span>desk</h1>
            <h1 className="text-4xl font-bold mb-4">Welcome to Zendesk Clone</h1>
            <p className="text-lg text-gray-600 mb-8">This is a simple clone of Zendesk built with Next.js and Tailwind CSS.</p>

            <button href="/" className="px-6 py-3 w-full bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300">
              Get Started
            </button>

          </div>

        </div>

      </div>



    </main>



  );
}

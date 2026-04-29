import Image from "next/image";
import Logo from "../../public/zendesk.jpeg"

export default function Home() {
  return (
    <main className="w-full flex flex-col md:flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row">
        <div className="flex flex-1 items-center justify-center">

          <Image src={Logo} alt="Zendesk Logo" width={600} height={600} />

        </div>
        <div className="flex flex-1 bg-red-500">
          <h1 className="text-4xl font-bold mb-4">Welcome to Zendesk Clone</h1>
          <p className="text-lg text-gray-600 mb-8">This is a simple clone of Zendesk built with Next.js and Tailwind CSS.</p>
        </div>

      </div>


    </main>


  );
}

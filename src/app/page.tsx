import { Container } from "@/components/Container";
import Logo from "../../public/gym-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/background.jpg')] blur-sm opacity-30 min-h-screen min-w-full absolute h-0 bottom-0 left-0 right-0 -z-10"></div>
      <main className="flex flex-col justify-center items-center gap-6 min-h-screen">
        <div className="flex flex-row items-center">
          <h1 className="text-9xl uppercase 60 font-bold flex flex flex-col items-center">
            Mamut <p>gym</p>
          </h1>
          <Image src={Logo} width={500} alt="Logo" />
        </div>
        <Link href="/rutinas">
          <p className="text-3xl pb-5 underline">Crea tu rutina personal</p>
        </Link>
      </main>
    </>
  );
}

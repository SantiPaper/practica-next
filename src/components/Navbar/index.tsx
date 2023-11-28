import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/gym-logo.png";
import { Container } from "../Container";

export const Navbar = () => {
  return (
    <header className="flex min-w-full items-center bg-gray-900 z-10 border-b-2">
      <div className="flex w-1/3 ">
        <Image src={Logo} alt="Logo gym" width={100} height={100} />
      </div>
      <ul className="flex row justify-between w-full">
        <li className="text-base p-4">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-base p-4">
          <Link href="/rutinas">Rutinas</Link>
        </li>
        <li className="text-base p-4">
          <Link href="/#">Prs</Link>
        </li>
        <li className="text-base p-4">
          <Link href="/#">Grupos</Link>
        </li>
        <li className="text-base p-4">
          <Link href="/#">Cuenta</Link>
        </li>
      </ul>
    </header>
  );
};

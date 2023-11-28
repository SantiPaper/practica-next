import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/gym-logo.png";

export const Navbar = () => {
  return (
    <div className="flex min-w-full justify-around items-center">
      <Image src={Logo} alt="Logo gym" width={100} height={100} />
      <Link className="text-base  p-4" href="/#">
        Rutinas
      </Link>
      <Link className="text-base  p-4" href="/#">
        Prs
      </Link>
      <Link className="text-base  p-4" href="/#">
        Grupos
      </Link>
      <Link className="text-base  p-4" href="/#">
        Cuenta
      </Link>
    </div>
  );
};

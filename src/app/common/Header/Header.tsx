import Image from "next/image";
import GreenWiseLogo from "public/images/logo-green-wise.png";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between wrapper border-2 border-red-500">
      <div>
        <Image
          src={GreenWiseLogo}
          width={131}
          height={31}
          alt="Green Wise Logo"
          className="h-auto w-32 object-cover"
          priority
        />
      </div>
      <nav className="">
        <ul className="flex flex-row items-center justify-center h-full gap-x-6">
          <li>Home</li>
          <li>Servicios</li>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

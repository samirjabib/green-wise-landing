import Image from "next/image";
import GreenWiseLogo from "public/images/logo-green-wise.png";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between wrapper  fixed top-0 left-0 z-50 py-4 bg-transparent transition-all duration-200 hover:bg-white">
      <div>
        <Image
          src={GreenWiseLogo}
          width={131}
          height={31}
          alt="Green Wise Logo"
          className="h-auto w-32 object-cover -z-50"
          priority
        />
      </div>
      <nav className="">
        <ul className="flex flex-row items-center justify-center h-full gap-x-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Sobre Nosotros</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

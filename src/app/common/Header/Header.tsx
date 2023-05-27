import Image from "next/image";
import GreenWiseLogo from "public/images/logo-green-wise.svg";

export const Header = () => {
  return (
    <div className=" group flex flex-row w-full justify-between   fixed top-0 left-0 z-50 py-4 bg-transparent transition-all duration-200 hover:bg-white ">
      <div className="wrapper">
        <Image
          src={GreenWiseLogo}
          width={131}
          height={31}
          alt="Green Wise Logo"
          className="h-auto w-32 object-cover -z-50"
          priority
        />
      </div>

      <nav className="wrapper">
        <ul className="group flex flex-row items-center justify-center h-full gap-x-6 text-white group-hover:text-black">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            <a>Home</a>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            <a>Servicios</a>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            <a>Sobre Nosotros</a>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

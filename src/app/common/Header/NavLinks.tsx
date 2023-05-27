export const NavLinks = () => {
  return (
    <nav className="">
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
  );
};

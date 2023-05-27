import { LogoGreenWise } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <div className=" group w-full  fixed top-0 left-0 z-50 py-2 bg-transparent transition-all duration-200 hover:bg-white ">
      <div className="flex flex-row w-full justify-between  wrapper">
        <LogoGreenWise />
        <NavLinks />
      </div>
    </div>
  );
};

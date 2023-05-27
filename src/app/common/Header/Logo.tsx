import Image from "next/image";
import GreenWiseLogo from "public/images/logo-green-wise.svg";

export const LogoGreenWise = () => {
  return (
    <div className="">
      <Image
        src={GreenWiseLogo}
        width={131}
        height={31}
        alt="Green Wise Logo"
        className="h-auto w-32 object-cover -z-50"
        priority
      />
    </div>
  );
};

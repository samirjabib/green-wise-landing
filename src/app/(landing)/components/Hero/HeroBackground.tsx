import Image from "next/image";
import backgroundHero from "public/images/landing/background-landing.jpg";

export const HeroBackground = () => {
  return (
    <div className=" h-[90vh] relative">
      <div className="h-auto w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100"></div>
        <Image
          src={backgroundHero}
          alt="hero-background"
          fill
          className="-z-20 object-cover h-full w-full object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black opacity-100"></div>
      </div>
    </div>
  );
};

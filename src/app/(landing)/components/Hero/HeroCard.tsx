import { AiOutlineDown } from "react-icons/ai";

export const HeroCard = () => {
  return (
    <div className=" h-[15vh] w-full flex ">
      <div className="bg-green-500 w-full h-full flex items-center justify-center relative bottom-2 shadow-lg text-3xl font-display font-extrabold italic">
        <h3 className="text-white/80">
          Abraza un futuro sostenible con servicios ambientales que marcan{" "}
          <span className="text-white/80 x">la diferencia</span>
        </h3>
      </div>
    </div>
  );
};

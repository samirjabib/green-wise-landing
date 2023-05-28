import { AiOutlineDown } from "react-icons/ai";

export const HeroCard = () => {
  return (
    <div className="border-2 border-yellow-500 h-[10vh] w-full grid grid-cols-6">
      <div className="border-red-500 col-span-4">ESta es la card flotante</div>
      <div className="border-2 border-orange-500 col-span-2 items-center justify-center flex uppercase font-extrabold tracking-tighter gap-x-2">
        scroll
        <AiOutlineDown size={24} className="animate-bounce mt-4" />
      </div>
    </div>
  );
};

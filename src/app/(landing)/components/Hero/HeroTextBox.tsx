import { AiOutlineWhatsApp } from "react-icons/ai";

export const HeroTextBox = () => {
  return (
    <div className=" absolute  top-0 right-0 left-0 h-[90vh]  text-white flex  w-full wrapper ">
      <div className="flex flex-col space-y-3 mt-52">
        <h1 className="display-title max-w-[750px] pr-16 text-start tracking-tight">
          Transformando el mundo con soluciones ambientales: nuestro enfoque
          integral
        </h1>
        <p className="text-base text-white/80 max-w-[510px] tracking-tight">
          Soluciones ambientales integrales. Manejo ambiental, evaluaciones,
          permisos, gestión de riesgos y residuos. Expertos en tu servicio.
        </p>
        <div className="">
          <button className="mt-4 bg-green-500 btn-main text-lg flex flex-row  gap-x-2 justify-center items-center">
            Contactanos
            <AiOutlineWhatsApp size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

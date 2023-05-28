export const HeroTextBox = () => {
  return (
    <div className=" absolute  top-0 right-0 left-0 h-[90vh]  text-white flex  w-full wrapper ">
      <div className="flex flex-col gap-y-2 mt-52">
        <h1 className="display-title max-w-[750px] pr-16 text-start">
          Transformando el mundo con soluciones ambientales: nuestro enfoque
          integral
        </h1>
        <p className="text-base text-white/80 max-w-[510px]">
          Soluciones ambientales integrales. Manejo ambiental, evaluaciones,
          permisos, gestión de riesgos y residuos. Expertos en tu servicio.
        </p>
        <div>
          <button className="mt-4 bg-green-500 px-6 py-2 rounded-full font-extrabold transition-all duration-200 hover:bg-green-600 shadow-md">
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
};

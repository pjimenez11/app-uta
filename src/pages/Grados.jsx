import { CartFacultades } from "../components/cartFacultades";
import { facultades } from "../data/facultades";

export const Grados = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        <img
          src="https://csei.uta.edu.ec/csei2021/images/galeria-uta/uta.png"
          alt="Himno"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-50 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="flex gap-x-2">
            <div className="w-2 bg-japanese-maple-600"></div>
            <span className="lg:text-7xl text-5xl font-bold text-white">
              Grados
            </span>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-8">
        {facultades.map((item) => (
          <CartFacultades key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

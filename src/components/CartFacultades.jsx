import { NavLink } from "react-router-dom";

export const CartFacultades = ({ item }) => {
  return (
    <div className="w-full max-w-xs lg:w-64 sm:w-72 bg-gray-100 bg-opacity-70 rounded-lg shadow-lg shadow-gray-800 text-secondary hover:shadow-lg hover:shadow-gray-500">
      <NavLink to={item.href}>
        <div className="p-8">
          <img
            src={item.imagen}
            alt={item.name}
            className="xs:h-56 xs:w-56 lg:w-48 lg:h-48 mx-auto my-auto"
          />
        </div>
        <div className="px-5 pb-5 text-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
            {item.name}
          </h5>
          <div className="mt-2 text-sm text-gray-800 truncate">
            {item.description}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { Grados } from "./pages/Grados";
import { Home } from "./pages/Home";
import { Idiomas } from "./pages/Idiomas";
import { Autoridades } from "./pages/Autoridades";
import { RendicionCuentas } from "./pages/RendicionCuentas";
import { Historia } from "./pages/Historia";
import { Himno } from "./pages/Himno";
import { RutasBuses } from "./pages/RutasBuses";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/inicio" element={<Home></Home>} />
      <Route path="/*" element={<Navigate to="/inicio" />} />
      <Route exact path="/programas-de-estudio/grado" element={<Grados />} />
      <Route exact path="/programas-de-estudio/idiomas" element={<Idiomas />} />
      <Route exact path="/nosotros/aurtoridades" element={<Autoridades />} />
      <Route
        exact
        path="/nosotros/rendicion-de-cuentas"
        element={<RendicionCuentas />}
      />
      <Route exact path="/nosotros/historia" element={<Historia />} />
      <Route exact path="/nosotros/himno" element={<Himno />} />
      <Route exact path="/nosotros/ruta-de-buses" element={<RutasBuses />} />
      <Route exact path="/nosotros/ruta-de-buses" element={<RutasBuses />} />
    </Routes>
  );
};

export default AppRoutes;

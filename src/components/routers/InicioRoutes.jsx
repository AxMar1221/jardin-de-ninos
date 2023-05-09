import { Navigate, Route, Routes } from "react-router-dom";
import { InicioApp } from "../pages/InicioApp";
import { ContactoApp } from "../pages/ContactoApp";
import { PadresDeFamiliaApp } from "../pages/PadresDeFamiliaApp";
import { AcercaDeApp } from "../pages/AcercaDeApp";

export const InicioRoutes = () => {
  return (
    <>
      <div className="mt-3">
        <Routes>
          <Route path="inicio" element={<InicioApp />} />
          <Route path="contacto" element={<ContactoApp />} />
          <Route path="padresDeFamilia" element={<PadresDeFamiliaApp />} />
          <Route path="acercaDe" element={<AcercaDeApp />} />

          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
};

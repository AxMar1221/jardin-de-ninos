import { Navigate, Route, Routes } from "react-router-dom";
import { AcercaDePage, ContactoPage, InicioPage, PadresDeFamiliaPage } from "../pages";


export const InicioRoutes = () => {
  return (
    <>
      <div className="mt-3">
        <Routes>
          <Route path="inicio" element={<InicioPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="padresDeFamilia" element={<PadresDeFamiliaPage />} />
          <Route path="acercaDe" element={<AcercaDePage />} />

          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
};

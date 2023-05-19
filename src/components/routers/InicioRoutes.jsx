import { Navigate, Route, Routes } from "react-router-dom";
import { AcercaDePage, ContactoPage, InicioPage, PadresDeFamiliaPage } from "../pages";
import { AuthenticatedPage } from "../../auth/pages/AuthenticatedPage";
import { MensajesPage } from "../../auth/pages/MensajesPage";


export const InicioRoutes = () => {
  return (
    <>
      <div className="mt-3">
        <Routes>
          <Route path="inicio" element={<InicioPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="padresDeFamilia" element={<PadresDeFamiliaPage />} />
          <Route path="acercaDe" element={<AcercaDePage />} />
          
          {/* paginas que se verán cuando se inicie sesión con la cuenta administradora */}
          <Route path="admin" element={<AuthenticatedPage />} />
          <Route path="mensajes" element={<MensajesPage />} />

          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
};

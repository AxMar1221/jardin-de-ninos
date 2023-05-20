import { Navigate, Route, Routes } from "react-router-dom";
import { AcercaDePage, ContactoPage, InicioPage, PadresDeFamiliaPage } from "../pages";
import { AuthRouter } from "../../auth/routers/AuthRouter";

export const InicioRoutes = () => {
  return (
    <>
      <div className="mt-3">
        <Routes>
          {/* paginas que se verán cuando se inicie sesión con la cuenta administradora */}
          <Route path="/*" element={<AuthRouter />} />

           {/* paginas publicas que se ven sin iniciar de sesión */}
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

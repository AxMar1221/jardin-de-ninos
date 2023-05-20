import { Route, Routes } from "react-router-dom";
import { InicioRoutes } from "../components/routers/InicioRoutes";
import { FooterApp, NavbarApp } from "../shared";


export const AppRouter = () => {
  return (
    <>
      <NavbarApp />

        <Routes>
          <Route path="/*" element={<InicioRoutes />} />
        </Routes>

      <FooterApp />
    </>
  );
};

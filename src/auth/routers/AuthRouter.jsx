import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { AuthenticatedPage } from "../pages/AuthenticatedPage"
import { MensajesPage } from "../pages/MensajesPage"



export const AuthRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="admin" element={<AuthenticatedPage />} />
            <Route path="mensajes" element={<MensajesPage />} />
        </Routes>

    </div>
  )
}

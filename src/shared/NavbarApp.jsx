import { School } from "@mui/icons-material";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavbarApp = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link href="/inicio" underline="hover">
        <School fontSize="large" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      </Link>


      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/inicio"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/padresDeFamilia"
          >
            Padres de familia
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/contacto"
          >
            Contacto
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/acercaDe"
          >
            ¿Quienes somos?
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

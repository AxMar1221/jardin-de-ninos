import { School } from "@mui/icons-material";
import { Avatar, IconButton, Link } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

export const NavbarApp = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/inicio", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link href="/inicio" underline="hover">
        <School
          fontSize="large"
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
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

      <div className="navbar-collapse collapse justify-content-end">
        <ul className="navbar-nav">
          <span className="nav-item nav-link active">
            <strong onClick={onLogout} className="logout">
              Jardín de niños <q>Lic. Agustin Yañez</q>
            </strong>
            <IconButton>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                <Avatar alt="AY" src="" sx={{ width: 24, height: 24 }} />
              </NavLink>
            </IconButton>
          </span>
        </ul>
      </div>
    </nav>
  );
};

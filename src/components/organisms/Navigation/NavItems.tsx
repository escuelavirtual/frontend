import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "../../../config/theme.js";

const NavItems = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="nav-Items">
        <ul>
          <li>
            <Link to="/teach">
              <Button>Enseñar</Button>
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <Button>Cursos</Button>
            </Link>
          </li>
          <li>
          <Link to="/">
            <Button variant="outlined" color="primary" size="medium">Iniciar Secion</Button>
          </Link>
          </li>
          <li>
            <Link to="/">
              <Button variant="contained" color="primary" size="medium">
                Registrarse
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default NavItems;

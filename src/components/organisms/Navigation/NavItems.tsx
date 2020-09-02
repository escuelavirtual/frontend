import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="nav-Items">
      <ul>
        <li>
          <Link to="/teach">
            <span>Enseñar</span>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <span>Cursos</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Inciar Sesión</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="btn">Registrarse</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;

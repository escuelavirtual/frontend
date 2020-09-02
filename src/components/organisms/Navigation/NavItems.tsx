import React from "react";

const NavItems = () => {
  return (
    <div className="nav-Items">
      <ul>
        <li>
          <a href="/">
            <span>Enseñar</span>
          </a>
        </li>

        <li>
          <a href="/">
            <span>Cursos</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>Inciar Sesión</span>
          </a>
        </li>
        <li>
          <a href="/">
            <button className="btn">Registrarse</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;

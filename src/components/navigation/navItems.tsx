import React from "react";
import "./style.scss";

function navItems() {
  return (
    <div className="navItems">
      <ul>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Contactanos</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Nosotros</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Cursos</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default navItems;

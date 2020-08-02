import React from "react";
import "./style.scss";

/* -- Importando Iconos -- */
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const navItems = () => (
  <div className="navItems">
    <ul>
      <li>
        <a href="#">
          <span>Inicio</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>Contactanos</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>Nosotros</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>Cursos</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>
            <HelpOutlineIcon />
          </span>
        </a>
      </li>
    </ul>
  </div>
);

export default navItems;

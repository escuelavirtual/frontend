import React from "react";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import "./style.scss";

function NavItems(): JSX.Element {
  return (
    <div className="navItems">
      <ul>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Cursos</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Maestros</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Contactanos</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/escuelavirtual">
            <span>
              <MoreHorizRoundedIcon />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;

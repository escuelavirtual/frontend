import React from "react";
import { Searcher } from "../../molecules/molecules";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav id="Navigation">
      <div className="nav-brand">
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/gjF7kFYS/logo-1.png"
              alt=""
              className="logo-img"
            />
            <span className="logo-text">Nombre de la plataforma</span>
          </Link>
        </div>
      </div>
      <div className="navigation-searcher">
        <Searcher placeholder={"Adelante!, empieza a escribir tu futuro."} />
      </div>
      <div className="navigation-items">
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
              <Link to="/login">
                <span>Inciar Sesión</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="btn">Registrarse</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

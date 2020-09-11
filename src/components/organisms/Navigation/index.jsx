import React from "react";
import { Searcher } from "../../molecules/molecules";
import { Link } from "react-router-dom";
import { Nav, Logo, Links, RegisterButton, NavSearch } from "./styles.js";
export default function Navigation() {
  return (
    <Nav>
      <div className="nav-brand">
        <Logo as={Link} to="/">
          <img src="https://i.postimg.cc/gjF7kFYS/logo-1.png" alt="" />
          <span>Nombre de la plataforma</span>
        </Logo>
      </div>
      <div className="navigation-searcher">
        <NavSearch
          as={Searcher}
          placeHolder={"Adelante!, empieza a escribir tu futuro."}
        />
      </div>
      <div className="navigation-items">
        <div className="nav-Items">
          <Links>
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
                <RegisterButton className="btn">Registrarse</RegisterButton>
              </Link>
            </li>
          </Links>
        </div>
      </div>
    </Nav>
  );
}

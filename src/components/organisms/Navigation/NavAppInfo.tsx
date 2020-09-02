import React from "react";
import { Link } from "react-router-dom";

const NavAppInfo = () => {
  return (
    <>
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
    </>
  );
};

export default NavAppInfo;

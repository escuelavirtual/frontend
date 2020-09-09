import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config";

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
          <span className="logo-text">{config.App.name}</span>
        </Link>
      </div>
    </>
  );
};

export default NavAppInfo;

import React from "react";
import "./style.scss";

const NavAppInfo = (props: any) => {
  return (
    <>
      <div className="nav-app-info">
        <figure></figure>
        <a href="/">
          <a href="/" className="app-name">
            {props.appName}
          </a>
          <a href="/versions" className="app-info">
            {props.appVersion}
          </a>
        </a>
      </div>
    </>
  );
};

type props = { appName: string; appVersion: string | number };

export default NavAppInfo;

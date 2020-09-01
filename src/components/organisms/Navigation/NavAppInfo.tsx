import React from "react";

const NavAppInfo = (props: any) => {
  return (
    <>
      <div className="nav-app-info">
        {props.logo && <figure></figure>}
        <a href="/">
          <div className="app-name">{props.appName}</div>
          <div className="app-info">{props.appVersion}</div>
        </a>
      </div>
    </>
  );
};

type props = { appName: string; appVersion: string | number };

export default NavAppInfo;

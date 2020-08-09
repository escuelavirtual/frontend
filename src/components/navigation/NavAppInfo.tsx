import React from "react";
import "./style.scss";

const NavAppInfo = (props: any) => {
  return (
    <>
      <figure></figure>
      <span>
        <a href="https://">
          <strong>{props.AppName}</strong>
          <span>{props.AppVersion}</span>
        </a>
      </span>
    </>
  );
};

type props = { Appname?: string; AppVersion?: string | number };

export default NavAppInfo;

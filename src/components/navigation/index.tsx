import React from "react";
import NavItems from "./navItems";
import Searcher from "../Searcher/index";
import NavAppInfo from "./NavAppInfo";
import "./style.scss";
import config from "../../config.json";

function Navigation(props: any): JSX.Element {
  return (
    <>
      <div id="Navigation">
        <nav>
          <div>
            <NavAppInfo
              appName={config.appName || props.appName}
              appVersion={config.appVersion || props.appVersion}
            />
          </div>
          <div className="navigation-searcher">
            <Searcher
              placeholder={
                props.placeholder || "Adelante!, empieza a escribir tu futuro."
              }
            />
          </div>
          <div className="navigation-items">
            <NavItems items={props.items || ["Cursos", "Blog", "Enseñar"]} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;

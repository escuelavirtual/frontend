import React from "react";
import NavItems from "./navItems";
import Searcher from "../Searcher/index";
import NavAppInfo from "./NavAppInfo";
import "./style.scss";

function Navigation(props: any): JSX.Element {
  return (
    <>
      <div id="Navigation">
        <nav>
          <div>
            <NavAppInfo appName={props.appName} appVersion={props.appVersion} />
          </div>
          <div>
            <Searcher placeholder={props.placeholder} />
          </div>
          <div className="navigationItems">
            <NavItems items={props.items} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;

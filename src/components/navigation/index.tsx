import React from "react";
import NavItems from "./navItems";
import Searcher from "../Searcher/index";
import NavAppInfo from "./NavAppInfo";
import "./style.scss";

function Navigation(props: any): JSX.Element {
  return (
<<<<<<< HEAD
    <>
      <div id="Navigation">
        <nav>
          <div>
            <NavAppInfo appName={props.appName} appVersion={props.appVersion} />
=======
    <div className="navigation">
      <nav>

        <div className="navLeft">
          <div className="navigationNavLogo">
            <NavAppInfo/>
>>>>>>> 87ffbcb58670e0f288254d1ca9f497ef4c7937b6
          </div>
          <div>
            <Searcher placeholder={props.placeholder}/>
          </div>
          <div className="navigationItems">
            <NavItems items={props.items} />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </nav>
      </div>
    </>
=======
=======
>>>>>>> 87ffbcb58670e0f288254d1ca9f497ef4c7937b6

        </div>
      </nav>
    </div>
>>>>>>> 87ffbcb58670e0f288254d1ca9f497ef4c7937b6
  );
}

export default Navigation;

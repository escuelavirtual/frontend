import React from "react";
import NavItems from "./navItems";
import NavAppInfo from "./NavAppInfo";
import Seeker from "../seeker/index";
import "./style.scss";

function Navigation(): JSX.Element {
  return (
    <div className="navigation">
      <nav>
        <div className="navLeft">
          <div className="navigationNavLogo">
            <NavAppInfo/>
          </div>
          <div className="navigationSeeker">
            <Seeker />
          </div>
          <div className="navigationNavItems">
            <NavItems />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

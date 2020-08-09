import React from "react";
import NavItems from "./navItems";
import NavLogo from "./navLogo";
import Seeker from "../seeker/index";
import UserStatus from "./userStatus";
import "./style.scss";

function Navigation(): JSX.Element {
  return (
    <div className="navigation">
      <nav>
        <div className="navigationNavLogo">
          <NavLogo />
        </div>
        <div className="navigationSeeker">
          <Seeker />
        </div>
        <div className="navigationNavItems">
          <NavItems />
        </div>
        <div id="NavigationUserStatus">
          <UserStatus />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

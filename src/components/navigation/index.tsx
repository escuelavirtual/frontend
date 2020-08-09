import React from "react";
import "./style.scss";

import NavAppInfo from "./NavAppInfo";
import Seacher from "../Seacher/index";
import NavItems from "./NavItems";

function Navigation(props: any) {
  return (
    <>
      <div className="navigation">
        <nav>
          <div>
            <NavAppInfo />
          </div>
          <div>
            <Seacher />
          </div>
          <div>
            <NavItems items={["hola", "mundo"]} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;

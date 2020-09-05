import React from "react";
import { Searcher } from "../../molecules/molecules";
import NavItems from "./NavItems";
import NavAppInfo from "./NavAppInfo";

export default function Navigation(): JSX.Element {
  return (
    <nav id="Navigation">
      <div className="nav-brand">
        <NavAppInfo />
      </div>
      <div className="navigation-searcher">
        <Searcher placeholder="Adelante!, empieza a escribir tu futuro." />
      </div>
      <div className="navigation-items">
        <NavItems />
      </div>
    </nav>
  );
}

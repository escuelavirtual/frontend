import React, { Fragment } from "react";
// import * as Search from "./search";
import "./style.scss";
import SearchIcon from "@material-ui/icons/Search";

function Seacher(): JSX.Element {
  return (
    <Fragment>
      <form action="/search" method="get" role="search">
        <div id="Seeker">
          <input
            type="text"
            name="seekerDefault"
            id="SeekerText"
            translate="no"
            placeholder="Buscar..."
            autoComplete="off"
            autoCorrect="off"
            maxLength={50}
            minLength={3}
          />
          <a href="https://" aria-label="Buscar">
            <SearchIcon />
          </a>
        </div>
      </form>
    </Fragment>
  );
}

export default Seacher;

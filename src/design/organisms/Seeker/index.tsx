import React from "react";
import SearchIcon from "@material-ui/icons/Search";
// import * as Search from "./search";

function Seeker(): JSX.Element {
  return (
    <div id="SeekerMain">
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
            // maxLength="50"
          />
          <a href="https://github.com">
            <SearchIcon />
          </a>
        </div>
      </form>
    </div>
  );
}

export default Seeker;

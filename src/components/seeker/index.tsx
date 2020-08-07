import React from "react";
import "./style.scss";

function Seeker(): JSX.Element {
  return (
    <div id="SeekerMain">
      <div id="seekerContainer">
        <input
          type="search"
          name="seekerDefault"
          id="Seeker"
          translate="no"
          placeholder="Buscar..."
          autoComplete="on"
        />
      </div>
    </div>
  );
}

export default Seeker;

import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Searcher(props) {
  return (
    <>
      <form action="/search" method="get" role="search" id="searcher">
        <button className="search-button">
          <SearchRoundedIcon className="search-icon" />
        </button>
        <input
          type="text"
          name="searcher"
          id="searcher-input"
          placeholder={props.placeholder || "buscar..."}
          translate="no"
          autoCorrect="off"
          maxLength={50}
          minLength={3}
          autoComplete="on"
        />
      </form>
    </>
  );
}

export default Searcher;

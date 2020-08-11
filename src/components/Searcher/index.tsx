import React from "react";
import "./style.scss";

function Searcher(props: any): JSX.Element {
  return (
    <>
      <form action="/search" method="get" role="search" id="Searcher">
        <input
          type="text"
          name="Searcher"
          id="SearcherInput"
          placeholder={props.placeholder}
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

type props = { placeholder: string };

export default Searcher;

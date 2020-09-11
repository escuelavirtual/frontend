import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { SearcherForm, SearchButton, SearchInput, SearchIcon } from "./styles";
function Searcher(props) {
  return (
    <SearcherForm action="/search" method="get" role="search" id="searcher">
      <SearchButton>
        <SearchIcon as={SearchRoundedIcon} className="search-icon" />
      </SearchButton>
      <SearchInput
        type="text"
        name="searcher"
        id="searcher-input"
        placeholder={props.placeHolder || "buscar..."}
        translate="no"
        autoCorrect="off"
        maxLength={50}
        minLength={3}
        autoComplete="on"
      />
    </SearcherForm>
  );
}

export default Searcher;

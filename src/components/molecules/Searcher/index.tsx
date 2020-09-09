import React from "react";
import {TextField,ThemeProvider} from "@material-ui/core";
import theme from "../../../config/theme.js";

function Searcher(props: any): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <form action="/search" method="get" role="search" id="searcher">
        <TextField variant="outlined" label="Buscar" size="small" placeholder="Que esperas!,  empeiza a escribir tu futuro." fullWidth/>
      </form>
    </ThemeProvider>
  );
}

type props = { placeholder: string };

export default Searcher;

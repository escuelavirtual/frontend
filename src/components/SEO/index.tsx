import React from "react";
import Helmet from "react-helmet";

export default function SEO(props: any): JSX.Element {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6705c6" />
      <title>
        {props.title ? `${props.title} | Escuela Virtual` : "Escuela Virtual"}
      </title>
      <link rel="canonical" href="https://escuela-frontend-dev.netlify.app/" />
    </Helmet>
  );
}

import React from "react";
import Helmet from "react-helmet";

export default function SEO(props: JSX.IntrinsicElements): JSX.Element {
  return (
    <Helmet>
      <title>
        {props.title ? `${props.title} | Escuela Virtual` : "Escuela Virtual"}
      </title>
    </Helmet>
  );
}

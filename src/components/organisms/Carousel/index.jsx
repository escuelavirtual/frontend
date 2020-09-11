import React from "react";
import { Banner } from "../../molecules/molecules";

export default function Header(props) {
  return (
    <div className="header">
      {props.items.map((props, i) => (
        <Banner title={props.title} text={props.text} src={props.src} />
      ))}
    </div>
  );
}

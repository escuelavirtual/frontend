import React from "react";
import { Banner } from "../../molecules/molecules";

type props = { items: any };

export default function Header(props: props) {
  return (
    <div className="header">
      {props.items.map((props: any, i: number) => (
        <Banner title={props.title} text={props.text} src={props.src} />
      ))}
    </div>
  );
}

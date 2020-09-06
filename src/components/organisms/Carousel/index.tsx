import React from "react";
import { Banner } from "../../molecules/molecules";

type props = { items: object[] };

export default function Carousel(props: props) {
  return (
    <div className="header">
      {props.items.map((props: any, i: number) => (
        <Banner key={i} title={props.title} text={props.text} src={props.src} />
      ))}
    </div>
  );
}

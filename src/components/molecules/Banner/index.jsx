import React from "react";
import { Image } from "../../atoms/atoms";

export default function Banner(props) {
  return (
    <div className="banner">
      {props.src && <Image src={props.src} alt="No Found" />}
      <h1 className="banner-title">{props.title}</h1>
      <h3 className="banner-">{props.text}</h3>
    </div>
  );
}

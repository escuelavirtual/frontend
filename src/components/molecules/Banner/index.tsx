import React from "react";
import { Image } from "../../atoms/atoms";

type props = { title: string; text: string; src: string };

export default function Banner(props: props) {
  return (
    <div className="banner">
      {props.src && <Image src={props.src} alt="No Found" />}
      <h1 className="banner-title">{props.title}</h1>
      <h3 className="banner-description">{props.text}</h3>
    </div>
  );
}

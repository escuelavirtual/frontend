import React from "react";

type props = { src: string; alt: string };

export default function Image(props: props): JSX.Element {
  return (
    <>
      <img src={props.src} alt={props.alt} />
    </>
  );
}

import React from "react";
import SEO from "../../components/SEO";
import { Carousel } from "../../components/organisms/organisms";

function Home() {
  return (
    <>
      <SEO title="Inicio" />
      <Carousel
        items={[
          {
            title: "Hey",
            text: "Hola",
            src:
              "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
          },
          {
            title: "Hey",
            text: "Hola",
            src:
              "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
          },
        ]}
      />
    </>
  );
}
export default Home;

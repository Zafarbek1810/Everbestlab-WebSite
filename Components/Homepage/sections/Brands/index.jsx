import React from "react";
import { Wrapper } from "./style";
import useWindowWidth from "../../../../Hooks/useWindow";

const data = [
  {
    imgPath: "./brands/revotech.webp",
  },
  {
    imgPath: "./brands/the-mind.webp",
  },
  {
    imgPath: "./brands/it-park.webp",
  },
  {
    imgPath: "./brands/dtm-truck.webp",
  },
  {
    imgPath: "./brands/i-proxy.webp",
  },
  {
    imgPath: "./brands/pgh.webp",
  },
];

const data2x = [...data, ...data];

const Brands = () => {
  const width = useWindowWidth();

  return (
    <Wrapper animateWidth={width}>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
            {data2x.map((item, idx) => (
              <div className="slide" key={idx}>
                <div>
                  <img src={item.imgPath} alt="паринеры" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Brands;

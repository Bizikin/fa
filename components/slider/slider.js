import React from "react";
import styled from "styled-components";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Slider3 from "./slider3";
import Slider4 from "./slider4";
import left from "../../public/images/slider/arr-left.png";
import right from "../../public/images/slider/arr-right.png";
import Image from "next/image";

const Slider = () => {
  return (
    <Wrapper>
      <Image className="left" src={left} />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Image className="right" src={right} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  .left {
    position: absolute;
    bottom: 100px;
  }
  .right {
    position: absolute;
    bottom: 200px;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Slider;

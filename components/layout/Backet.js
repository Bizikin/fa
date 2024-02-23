import React from "react";
import styled from "styled-components";
import { SvgBacket } from "../SvgComponents";
import Link from "next/link";

const Backet = () => {
  return (
    <Wrapper>
      <Link href="/backet">
        <SvgBacket />
        <div className="count">0</div>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 100px;
  cursor: pointer;
  .count {
    background: black;
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    right: 5px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
export default Backet;

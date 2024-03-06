import React from "react";
import styled from "styled-components";
import { SvgBacket } from "../SvgComponents";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

const Backet = () => {
  const { items } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <Link href="/backet" className="link">
        <SvgBacket />
        {!items && <div className="count">0</div>}
        <div className="count">{items}</div>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 100px;
  z-index: 100;
  .link {
    position: relative;
    cursor: pointer;
  }
  .count {
    background: black;
    width: 30px;
    height: 30px;
    position: absolute;
    top: -85px;
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
    bottom: 300px;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Backet;

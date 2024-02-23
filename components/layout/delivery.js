import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deliveryModalHandler } from "../../features/user/userSlice";

const Delivery = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper onClick={() => dispatch(deliveryModalHandler(true))}>
      <p>ДОСТАВКА</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    position: fixed;
    left: 0;
    bottom: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 190px;
    background: rgba(0, 0, 0, 0.45);
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    box-shadow: var(--shadow-1);
    cursor: pointer;
    transition: 0.5s;
    font-weight: 600;
    z-index: 1000;
    &:hover {
      box-shadow: none;
    }
    p {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      color: #eadbbe;
      font-size: 22px;
    }
  }
  @media (min-width: 1400px) {
  }
`;
export default Delivery;

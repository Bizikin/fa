import React from "react";
import styled from "styled-components";

const Item = ({ name, pictures, unitPrice }) => {
  return (
    <Wrapper>
      <div className="product-image">
        <img src={pictures[0]} alt="" />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="calc">calculate</div>
      <p>{unitPrice}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .product-image {
    width: 300px;
    height: 232px;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 25px;
      object-fit: cover;
      box-shadow: var(--shadow-1);
    }
  }
  .name {
    margin-bottom: 19px;
    color: #000;
    text-align: center;
    text-shadow: 0 1px 7.498px rgba(0, 0, 0, 0.25);
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    word-break: break-all;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
    .product-image {
      width: 350px;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Item;

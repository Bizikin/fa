import React from "react";
import styled from "styled-components";
import { SvgMinus, SvgPlus } from "../SvgComponents";
import { useSelector, useDispatch } from "react-redux";
import { incCart, decCart } from "../../features/user/userSlice";

const Item = ({ name, pictures, unitPrice, id, quantity, productId }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="product-image">
        <img src={pictures[0]} alt="" />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="calc">
        <div onClick={() => dispatch(decCart({ productId: productId }))}>
          <SvgMinus />
        </div>
        <p className="product-amount">{quantity}</p>
        <div onClick={() => dispatch(incCart({ productId: productId }))}>
          <SvgPlus />
        </div>
      </div>
      <p className="price">{Math.round(unitPrice * quantity)}₽</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .product-image {
    width: 300px;
    height: 232px;
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
    width: 300px;
    margin: 10px;
  }
  .calc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    height: 50px;
    svg {
      cursor: pointer;
    }
  }
  .product-amount {
    color: #000;
    text-shadow: 0px 1.371px 10.283px rgba(0, 0, 0, 0.25);
    font-family: Inter, sans-serif;
    font-size: 43.873px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .price {
    width: 150px;
    text-align: center;
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
      margin-bottom: 30px;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Item;

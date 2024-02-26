import React from "react";
import styled from "styled-components";
import { SvgBacketSmall, SvgMinus, SvgPlus } from "../SvgComponents";

const Product = ({
  id,
  pictureUrls,
  name,
  description,
  weightInGrams,
  price,
}) => {
  return (
    <Wrapper>
      <div className="product-image">
        <img src={pictureUrls} alt="" />
      </div>
      <div className="product-title">{name}</div>
      <div className="product-descr">{description}</div>
      <div className="extra">
        <div className="product-weight">{weightInGrams} гр.</div>
        <div className="product-price">{price}</div>
        <div className="product-cart">
          <SvgBacketSmall />
        </div>
      </div>
      <div className="extra">
        <div>
          <SvgMinus />
        </div>
        <div className="product-amount">1</div>
        <div>
          <SvgPlus />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 12px;
  height: 500px;
  .product-image {
    width: 100%;
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
  .product-title {
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
  }
  .product-desc {
    margin-bottom: 29px;
    color: #000;
    text-shadow: 0 0.586px 4.396px rgba(0, 0, 0, 0.25);
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px;
  }
  .extra {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    .cart {
      cursor: pointer;
    }
  }
  .product-price {
    border-radius: 25px;
    background: #000;
    box-shadow: var(--shadow-1);
    padding: 8px 16px;
    box-sizing: border-box;
    color: #eadbbe;
    font-family: Poppins;
    font-size: 26.08px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  .product-weight {
    color: #000;
    text-shadow: 0 0.464px 3.48px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: 14.849px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
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
  @media (min-width: 576px) {
    width: 350px;
    .product-image {
      width: 350px;
    }
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
export default Product;

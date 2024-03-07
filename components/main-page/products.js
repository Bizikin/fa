import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Product from "./product";

const Products = ({ products }) => {
  // const { products } = useSelector((store) => store.user);
  return (
    <Wrapper>
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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
export default Products;

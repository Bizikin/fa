import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/cart/item";

const Items = () => {
  const { basket } = useSelector((store) => store.user);
  return (
    <Wrapper>
      {basket?.map((b, index) => (
        <Item key={index} {...b} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
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
export default Items;

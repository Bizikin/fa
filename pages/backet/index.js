import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../features/user/userSlice";
import Items from "../../components/cart/items";

const Index = () => {
  const { basket } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <Wrapper>
      {Object.keys(basket).length === 0 ? <p>КОРЗИНА ПУСТА</p> : <Items />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

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
export default Index;

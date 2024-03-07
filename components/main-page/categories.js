import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Category from "./category";

const Categories = ({ categories }) => {
  // const { categories, currentAddress } = useSelector((store) => store.user);
  return (
    <Wrapper>
      {categories?.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  width: 90%;
  cursor: grab;
  padding-bottom: 30px;
  margin-bottom: 30px;
  overflow-x: auto;

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

export default Categories;

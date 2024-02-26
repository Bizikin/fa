"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import RestaurantModal from "../components/modal/RestaurantModal";
import { useSelector, useDispatch } from "react-redux";
import {
  restaurantModalHandler,
  getProducts,
} from "../features/user/userSlice";
import Slider from "../components/slider/slider";
import Products from "../components/main-page/products";

const Index = () => {
  const { isRestaurantModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ restaurantId: 1, categoryId: 1 }));
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      dispatch(restaurantModalHandler(true));
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Wrapper>
      {isRestaurantModal && <RestaurantModal />}
      <Slider />
      <Products />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

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

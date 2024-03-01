"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import RestaurantModal from "../components/modal/RestaurantModal";
import { useSelector, useDispatch } from "react-redux";
import {
  restaurantModalHandler,
  getProducts,
  getCategories,
  createSession,
  cleanBasketHandler,
} from "../features/user/userSlice";
import Slider from "../components/slider/slider";
import Products from "../components/main-page/products";
import Categories from "../components/main-page/categories";

const Index = () => {
  const { isRestaurantModal, currentAddress, currentCategory } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSession());
  }, []);

  useEffect(() => {
    dispatch(
      getProducts({
        restaurantId: currentAddress?.categoryId || 1,
        categoryId: currentCategory?.id || 1,
      })
    );
  }, [currentCategory]);

  useEffect(() => {
    dispatch(getCategories({ categoryId: currentAddress?.categoryId || 1 }));
  }, [currentAddress]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      dispatch(restaurantModalHandler(true));
      dispatch(cleanBasketHandler());
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
      <Categories />
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

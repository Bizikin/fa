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
  cleanCurentAddressHandler,
} from "../features/user/userSlice";
import Slider from "../components/slider/slider";
import Products from "../components/main-page/products";
import Categories from "../components/main-page/categories";

const Index = ({ products }) => {
  const { isRestaurantModal, currentAddress, currentCategory } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      dispatch(restaurantModalHandler(true));
      // dispatch(cleanBasketHandler());
      dispatch(cleanCurentAddressHandler());
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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

  return (
    <Wrapper>
      {isRestaurantModal && <RestaurantModal />}
      <Slider />
      <Categories />
      <Products products={products} />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `https://api.dev.fabrika-rest.ru/api/product?restaurantId=1&categoryId=1`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}

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

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
import { getCart, editCart } from "../features/user/userSlice";

const Index = ({ products, categories }) => {
  const { isRestaurantModal, currentAddress, currentCategory } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      dispatch(restaurantModalHandler(true));
      // dispatch(cleanBasketHandler());
      // dispatch(cleanCurentAddressHandler());
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
      <Categories categories={categories} />
      <Products products={products} />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const url_1 = `https://api.dev.fabrika-rest.ru/api/category?restaurantId=1`;
  const url_2 = `https://api.dev.fabrika-rest.ru/api/product?restaurantId=1&categoryId=1`;

  try {
    const [data_1, data_2] = await Promise.all([
      fetch(url_1).then((response) => response.json()),
      fetch(url_2).then((response) => response.json()),
    ]);

    return {
      props: {
        categories: data_1,
        products: data_2,
      },
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);

    return {
      props: {
        categories: [],
        products: [],
        error: "Ошибка при загрузке данных",
      },
    };
  }
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

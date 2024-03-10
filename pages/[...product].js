"use client";
import React from "react";
import styled from "styled-components";
import RestaurantModal from "../components/modal/RestaurantModal";
import { useSelector } from "react-redux";

import Slider from "../components/slider/slider";
import Products from "../components/main-page/products";
import Categories from "../components/main-page/categories";
import { usePathname } from "next/navigation";

const Index = ({ products, categories }) => {
  const { isRestaurantModal, currentAddress, currentCategory } = useSelector(
    (store) => store.user
  );

  return (
    <Wrapper>
      {isRestaurantModal && <RestaurantModal />}
      <Slider />
      <Categories categories={categories} />
      <Products products={products} />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  const { product } = context.params;
  const restaurantId = product[0] || 1;
  const categoryId = product[1] || 1;

  const url_1 = `https://api.dev.fabrika-rest.ru/api/category?restaurantId=${restaurantId}`;
  const url_2 = `https://api.dev.fabrika-rest.ru/api/product?restaurantId=${restaurantId}&categoryId=${categoryId}`;

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

useEffect(() => {
const handleBeforeUnload = (e) => {
dispatch(restaurantModalHandler(true));
// dispatch(cleanBasketHandler());
e.preventDefault();
e.returnValue = "";
};

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

}, []);

export async function getStaticProps() {
const restaurantId = currentAddress?.categoryId || 1;
const categoryId = currentCategory?.id || 1;
const response = await fetch(
`https://api.dev.fabrika-rest.ru/api/product?restaurantId=${restaurantId}&categoryId=${categoryId}`
);
const data = await response.json();

return {
props: {
products: data,
},
};
}

// export async function getStaticProps() {
// const restaurantId = currentAddress?.categoryId || 1;
// const categoryId = currentCategory?.id || 1;
// const response = await fetch(
// `https://api.dev.fabrika-rest.ru/api/product?restaurantId=${restaurantId}&categoryId=${categoryId}`
// );
// const data = await response.json();

// return {
// props: {
// products: data,
// },
// };
// }

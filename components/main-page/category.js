import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { currentCategoryHandler } from "../../features/user/userSlice";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Category = ({ name, id }) => {
  const { currentCategory, currentAddress } = useSelector(
    (store) => store.user
  );

  const path = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const currentCategoryH = () => {
    const newCategoryId = currentAddress?.categoryId || 1;
    dispatch(currentCategoryHandler({ id: id, name: name }));
    router.push(`/${currentAddress.categoryId}/${id || 1}`);
  };

  // console.log("path", path);
  // console.log("router", router);

  const pathArray = router.asPath.slice(1).split("/");
  // console.log("pathArray", pathArray);
  // console.log(currentCategory.id);

  return (
    <Wrapper
      className={id === parseInt(pathArray[1]) ? "active" : ""}
      onClick={currentCategoryH}
    >
      {name}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  white-space: nowrap;
  margin-right: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 22px;
  color: #000000;
  font-family: Inter, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  background-color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
  &.active {
    background-color: #000000;
    color: #ffffff;
  }

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
export default Category;

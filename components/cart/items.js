import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/cart/item";
import _ from "lodash";

const Items = () => {
  const { basket } = useSelector((store) => store.user);

  const backet2 = _.map(basket, (b) => ({
    ...b,
    total: b.quantity * b.unitPrice,
  }));

  console.log("backet2", backet2);

  const totalAmount = _.sumBy(backet2, (b) => b.total);

  console.log("totalAmount", totalAmount);

  return (
    <Wrapper>
      {basket?.map((b, index) => (
        <Item key={index} {...b} />
      ))}
      <div className="total">
        <p>ИТОГО: {totalAmount}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .total {
    display: flex;
    justify-content: end;
    margin: 20px;
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
export default Items;

import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/cart/item";
import _ from "lodash";
import Checkbox from "./checkbox";

const Items = () => {
  const { basket } = useSelector((store) => store.user);
  const [payment, setPayment] = useState("");
  console.log(payment);

  const backet2 = _.map(basket, (b) => ({
    ...b,
    total: b.quantity * b.unitPrice,
  }));

  // console.log("backet2", backet2);

  const totalAmount = _.sumBy(backet2, (b) => b.total);

  // console.log("totalAmount", totalAmount);

  const stateHandler = (state) => {
    setPayment(state);
  };

  return (
    <Wrapper>
      {basket?.map((b, index) => (
        <Item key={index} {...b} />
      ))}
      <div className="total">
        <p>ИТОГО: {Math.round(totalAmount)}</p>
      </div>
      <div className="anketa">
        <div className="left">
          <p className="header">ЗАПОЛНИТЕ ДАННЫЕ</p>
          <input type="text" placeholder="Имя" />
          <p className="red">Поле обязательно</p>
          <input type="text" placeholder="+7 (" />
          <input type="text" placeholder="Адрес" />
        </div>
        <div className="right">
          <p className="header">СПОСОБ ОПЛАТЫ</p>
          <Checkbox
            onCheckboxChange={stateHandler}
            label="НАЛИЧНЫЕ"
            status={payment !== "НАЛИЧНЫЕ" ? false : true}
          />
          <Checkbox
            onCheckboxChange={stateHandler}
            label="ПЕРЕВОД НА КАРТУ"
            status={payment !== "ПЕРЕВОД НА КАРТУ" ? false : true}
          />
          <Checkbox
            onCheckboxChange={stateHandler}
            label="БАНКОВСКОЙ КАРТОЙ КУРЬЕРУ"
            status={payment !== "БАНКОВСКОЙ КАРТОЙ КУРЬЕРУ" ? false : true}
          />
        </div>
        <div className="right"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .total {
    display: flex;
    justify-content: end;
    margin-right: 50px;
  }
  input {
    width: 460px;
    margin-bottom: 31px;
    padding: 11px 22px;
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid #b48a39;
    background: transparent;
    color: #000000;
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
      color: #b48a39;
    }
  }
  .anketa {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .left {
      display: flex;
      flex-direction: column;
      .header {
        margin-bottom: 50px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        margin: 0;
      }
      .header {
        margin-bottom: 50px;
      }
    }
  }
  .red {
    font-size: 16px;
    color: red;
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .anketa {
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Items;

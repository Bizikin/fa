import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/cart/item";
import _ from "lodash";
import Checkbox from "./checkbox";
import { Toaster, toaast } from "react-hot-toast";

const initialState = {
  customerName: "",
  phoneNumber: "",
  address: "",
};

const Items = () => {
  const { basket } = useSelector((store) => store.user);
  const [payment, setPayment] = useState("");
  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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

  const submitHandler = () => {
    const { customerName, phoneNumber, address } = values;
    console.log("address", address);
    console.log("customerName", customerName);
    console.log("phoneNumber", phoneNumber);
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
          <input
            type="text"
            placeholder="Имя"
            name="customerName"
            value={values.customerName}
            onChange={changeHandler}
          />
          <p className="red">Поле обязательно</p>
          <input
            type="text"
            placeholder="+7 ("
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Адрес"
            name="address"
            value={values.address}
            onChange={changeHandler}
          />
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
      </div>
      <div className="actions">
        <button className="btn" onClick={submitHandler}>
          ОФОРМИТЬ ЗАКАЗ
        </button>
      </div>
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            padding: "1rem",
            // backgroundColor: "#ffdfff",
            fontSize: "1rem",
            // color: "#17132a",
            // borderColor: "#ff00ff",
            // border: "2px solid #ff00ff",
          },
        }}
      />
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
    margin: 20px;
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
  .actions {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin-bottom: 156px;
    padding: 31px 49px;
    box-sizing: border-box;
    border-radius: 36.652px;
    background: rgba(0, 0, 0, 0.45);
    box-shadow: var(--shadow-1);
    color: #eadbbe;
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      box-shadow: none;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .anketa {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      /* margin: 0; */
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Items;

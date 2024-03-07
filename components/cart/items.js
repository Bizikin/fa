import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/cart/item";
import _ from "lodash";
import Checkbox from "./checkbox";
import { Toaster, toast } from "react-hot-toast";
import { order } from "../../features/user/userSlice";

const initialState = {
  customerName: "",
  phoneNumber: "",
  address: "",
};

const Items = () => {
  const { basket, currentAddress } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [payment, setPayment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (payment === "НАЛИЧНЫЕ") {
      setPaymentMethod(0);
    }
    if (payment === "ПЕРЕВОД НА КАРТУ") {
      setPaymentMethod(1);
    }
    if (payment === "БАНКОВСКОЙ КАРТОЙ КУРЬЕРУ") {
      setPaymentMethod(2);
    }
  }, [payment]);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const backet2 = _.map(basket, (b) => ({
    ...b,
    total: b.quantity * b.unitPrice,
  }));

  const totalAmount = _.sumBy(backet2, (b) => b.total);

  const stateHandler = (state) => {
    setPayment(state);
  };

  const submitHandler = () => {
    const { customerName, phoneNumber, address } = values;
    if (!phoneNumber) {
      return toast.error("Телефон обязателен для заполнения");
    }
    if (!currentAddress) {
      return toast.error("Выберете ресторан");
    }
    dispatch(
      order({
        address: {
          street: address,
        },
        customerName: customerName,
        paymentMethod: paymentMethod,
        phoneNumber: phoneNumber,
        restaurantId: currentAddress.categoryId,
      })
    );
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

            fontSize: "1rem",
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
    max-width: 460px;
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
      margin-right: 30px;
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

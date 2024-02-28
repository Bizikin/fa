import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import img1 from "../../public/images/about-us/main.png";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <div className="block">
        <div className="address">
          <p className="line1">О нас</p>
          <p className="line2">Давайте познакомимся поближе!</p>
          <p className="line3">
            Сеть кафе «ФАБРИКА» работает уже более трех лет и не перестает
            радовать вас приятными ценами и качественным сервисом. Мы работаем в
            формате true cost, что в переводе с английского означает «честная
            цена».
          </p>
        </div>

        <div className="picture">
          <Image className="map" src={img1} alt="" />
        </div>
      </div>
      <div className="block2">
        <p className="block2-text">У нас также установлена плата за вход:</p>
        <p className="text">
          <span>До 16:00</span> – 100 рублей с человека
        </p>
        <p className="text">
          <span>После 16:00 </span> – 300 рублей с человека
        </p>
        <div className="text2">
          <p className="text">Детям до 7 лет вход бесплатный</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .block {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .picture {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .map {
      width: 100%;
      object-fit: cover;
      height: 100%;
      box-shadow: var(--shadow-1);
    }
  }
  .address {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
  .line1 {
    color: #000;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    font-size: 24px;
  }
  .line2 {
    color: #b48a39;
    font-family: Nunito, sans-serif;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
  .line3 {
    color: #000;
    font-family: Nunito, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .block2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px 0;
    .text {
      font-size: 18px;
    }
    .text2 {
      background: silver;
      padding: 0px;
    }
    .block2-text {
      color: #000;
      font-family: Inter, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
    }
  }
  span {
    font-weight: 700;
  }
  @media (min-width: 576px) {
    .block {
      .picture {
        display: flex;
        justify-content: center;
        .map {
          width: 500px;
          height: 500px;
        }
      }
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .block {
      display: flex;
      flex-direction: row;
      .picture {
        width: 500px;
        height: 500px;
      }
    }
    .address {
      margin: 20px;
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
    }
    .line1 {
      font-size: 40px;
    }
    .line2 {
      font-size: 32px;
      text-align: left;
    }
    .line3 {
      font-size: 18px;
    }
    .block2 {
      .text {
        font-size: 24px;
      }
      .block2-text {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Index;

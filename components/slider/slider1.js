import React from "react";
import styled from "styled-components";
import map from "../../public/images/slider/slide1.png";
import Image from "next/image";

const Slider1 = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="line1">ПОЗНАКОМИМСЯ!</div>
        <div className="line2">
          «Фабрика» рада приветствовать Вас у нас в гостях!
        </div>
        <div className="line3">
          Концепция нашего заведения называется «true cost» - в переводе с
          английского «честная цена» - система, в которой гости платят за вход,
          а все блюда и напитки из меню предлагаются по себестоимости.
        </div>
        <div className="image2">
          <Image className="picture" src={map} alt="map" />
        </div>
        <div className="line4">
          <div className="info">
            <p>Стоимость входа в наше заведение фиксированная:</p>
            <p>
              <span>До 16:00 </span>– 100 рублей с человека
            </p>
            <p>
              <span>После 16:00 </span>– 300 рублей с человека
            </p>
            <p className="child">Детям до 7 лет вход бесплатный </p>
          </div>
        </div>
      </div>
      <div className="image">
        <Image
          className="picture"
          src={map}
          width={420}
          height={410}
          alt="map"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  box-sizing: border-box;
  border-radius: 32px;
  background: white;
  margin: 10px;
  box-shadow: var(--shadow-1);
  cursor: grab;

  .content {
    width: 100%;
    padding: 15px;
    .line1 {
      font-size: 25px;
      font-weight: 900;
      margin: 15px;
    }
    .line2 {
      font-style: italic;
      margin: 15px;
      font-size: 15px;
    }
    .line3 {
      margin: 15px;
      font-size: 18px;
    }
    .line4 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      .info {
        padding: 10px 5px;
        border: 1px solid #ffffde;
        border-image-slice: 1;
        width: 430px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-image-source: linear-gradient(
          0deg,
          #b48a39,
          #ffffde,
          #d5be7f,
          #fffbef,
          #b48a39
        );
      }
      span {
        font-weight: 600;
      }
      p {
        margin: 0;
        margin-bottom: 10px;
      }
      .child {
        font-size: 13px;
      }
    }
  }
  .image {
    display: none;
    width: 420px;
    object-fit: cover;
    .picture {
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      object-fit: cover;
    }
  }
  .image2 {
    object-fit: cover;
    display: flex;
    justify-content: center;
    margin: 20px;
    .picture {
      width: 100%;
      height: 300px;
      border-radius: 32px;
      object-fit: cover;
      box-shadow: var(--shadow-1);
    }
  }
  @media (min-width: 576px) {
    .content {
      padding: 30px;
    }
    .image2 {
      .picture {
        width: 400px;
      }
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    width: 1070px;
    height: 410px;
    .image {
      display: block;
    }
    .image2 {
      display: none;
    }
  }
  @media (min-width: 1400px) {
  }
`;
export default Slider1;

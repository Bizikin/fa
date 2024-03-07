import React from "react";
import styled from "styled-components";
import img1 from "../../public/images/about-us/main.png";
import img2 from "../../public/images/about-us/grid1.png";
import img3 from "../../public/images/about-us/grid3.png";
import img4 from "../../public/images/about-us/grid4.png";
import img5 from "../../public/images/about-us/grid5.png";
import img6 from "../../public/images/about-us/grid6.png";
import img7 from "../../public/images/about-us/grid7.png";
import Image from "next/image";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Wrapper>
        <div className="block">
          <div className="address">
            <p className="line1">О нас</p>
            <p className="line2">Давайте познакомимся поближе!</p>
            <p className="line3">
              Сеть кафе «ФАБРИКА» работает уже более трех лет и не перестает
              радовать вас приятными ценами и качественным сервисом. Мы работаем
              в формате true cost, что в переводе с английского означает
              «честная цена».
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
        <div className="block3">
          <p className="header">Из особенностей нашей сети:</p>
          <div className="block3-address">
            <div className="koffe">
              <div className="k1">
                <p className="k-text">КАФЕ ПО АДРЕСУ</p>
                <p className="k-address">ПЕРВОМАЙСКАЯ 39</p>
                <p className="k-text">Банкетный зал «Барбарис»</p>
                <p className="k-text2 k-height">
                  Общей вместимостью до 80 человек
                </p>
                <p className="k-text">VIP-комната</p>
                <p className="k-text2">Общей вместимостью до 10 человек</p>
              </div>
            </div>
            <div className="k2"></div>
            <div className="koffe">
              <div className="k1">
                <p className="k-text">КАФЕ ПО АДРЕСУ</p>
                <p className="k-address">КОРДОННЫЙ 1И</p>
                <p className="k-text">Вместимость до 65 человек</p>
                <p className="k-height">Без учета летней веранды</p>
                <p className="k-text">Первая береговая линия</p>
                <p>В шаговой доступности к морю</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block4">
          <div className="row">
            <Image className="picture" src={img2} />
            <Image className="picture" src={img3} />
            <Image className="picture" src={img4} />
          </div>
          <div className="row">
            <Image className="picture" src={img5} />
            <Image className="picture" src={img6} />
            <Image className="picture" src={img7} />
          </div>
        </div>
      </Wrapper>
    </>
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
  .block3 {
    .header {
      color: #000;
      font-family: Inter, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
    }
    .block3-address {
      display: flex;
      width: 100%;
      flex-direction: column;
      .koffe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .k1 {
        p {
          margin: 10px;
        }
      }
    }
  }
  .k-text {
    color: #000;
    font-family: Nunito, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .k-address {
    color: #b48a39;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    height: 50px;
  }
  .k-height {
    height: 50px;
  }
  .block4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;
    .row {
      width: 45%;
      .picture {
        width: 95%;
        margin: 7px;
        height: auto;
      }
    }
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
    .block3 {
      width: 900px;
      .header {
        font-size: 36px;
      }
      .block3-address {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
      .k2 {
        border-right: 3px solid black;
      }
    }
    .k-text {
      font-size: 24px;
    }
    .k-address {
      font-size: 32px;
      height: 70px;
    }
  }
  .block4 {
    display: flex;
    flex-wrap: wrap;
    .picture {
      width: 400px;
      height: auto;
    }
  }
  @media (min-width: 1200px) {
    .block4 {
      display: flex;
      flex-wrap: wrap;
      .picture {
        width: 500px;
        height: auto;
      }
    }
  }
  @media (min-width: 1400px) {
  }
`;
export default Index;

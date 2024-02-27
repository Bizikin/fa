import React from "react";
import styled from "styled-components";
import map from "../../public/images/map.png";
import map2 from "../../public/images/map-delivery.png";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <div className="header">Контакты</div>
      <div className="cards">
        <div className="card">
          <p className="line1">БРОНЬ СТОЛОВ, ДОСТАВКА С ПЕРВОМАЙСКОЙ 39</p>
          <p className="line2">8 (928) 841-11-71</p>
        </div>
        <div className="card">
          <p className="line1">
            БРОНЬ СТОЛОВ, ДОСТАВКА ПЕРЕУЛКА С КОРДОННОГО 1И
          </p>
          <p className="line2">8 (938) 557-70-30</p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p className="line1">
            ПО БРОНИ БАНКЕТНОГО ЗАЛА И ОРГАНИЗАЦИИ МЕРОПРИЯТИЯ:
          </p>
          <p className="line2">8 (918) 640-02-50</p>
        </div>
      </div>
      <div className="block">
        <div className="picture">
          <Image className="map" src={map} alt="" />
        </div>
        <div className="address">
          <div className="addr1">
            <p>г. Анапа, ул. Первомайская 39</p>
            <p>График работы:</p>
            <p>Пн-чт с 10:00 до 00:00</p>
            <p>Пт-вс с 10:00 до 02:00:</p>
          </div>
          <div className="addr1">
            <p>г. Анапа, ул. Кордонный 1И</p>
            <p>График работы:</p>
            <p>Пн-чт с 10:00 до 00:00</p>
            <p>Пт-вс с 10:00 до 02:00:</p>
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="picture">
          <Image className="map" src={map2} alt="" />
        </div>
        <div className="address address2">
          <div className="line1">ДОСТАВКА!</div>
          <div className="line2">
            «Фабрика» рада, что вы выбираете нашу доставку!
          </div>
          <div className="line3">
            Хотим сразу рассказать о тарифах по доставке, так как блюда мы
            отдаем по честной цене, нам придется включить стоимость за доставку:
          </div>
          <div className="line4">
            <div className="adr">
              <div className="circle" style={{ background: "#74CB62" }}></div>
              <p>Анапа – 150 рублей</p>
            </div>
            <div className="adr">
              <div className="circle" style={{ background: "#F28C89" }}></div>
              <p>Витязево – 350 рублей</p>
            </div>
            <div className="adr">
              <div className="circle" style={{ background: "#385A75" }}></div>
              <p>Анапская – 250 рублей</p>
            </div>
            <div className="adr">
              <div className="circle" style={{ background: "#D175FA" }}></div>
              <p>Джемете – 350 рублей</p>
            </div>
            <div className="adr">
              <div className="circle" style={{ background: "#F9BB71" }}></div>
              <p>Су-Псех – 250 рублей</p>
            </div>
          </div>
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
  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: var(--shadow-1);
    background: white;
    padding: 20px;
    border-radius: 25px;
    margin: 20px 20px;
    /* width: 100%; */
    .line1 {
      color: #b48a39;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
      margin: 10px;
      font-size: 15px;
    }
    .line2 {
      color: #000;
      font-family: Nunito, sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 37px;
      text-align: center;
      font-size: 20px;
      margin: 10px;
    }
  }
  .header {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .block {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .picture {
      width: 100%;
      height: 100%;
    }
    .map {
      width: 100%;
      height: 100%;
      box-shadow: var(--shadow-1);
    }
  }
  .block2 {
    display: flex;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
    .picture {
      width: 100%;
      height: 100%;
    }
    .map {
      width: 100%;
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
    .addr1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      width: 300px;
      p {
        margin: 10px 0;
        color: #000;
        font-family: Inter, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        /* line-height: 49px; */
      }
    }
  }
  .address2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .line1 {
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 10px;
    text-align: left;
    text-transform: uppercase;
  }
  .line2 {
    color: #000;
    font-family: Nunito, sans-serif;
    font-style: italic;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 15px;
  }
  .line3 {
    color: #000;
    font-family: Nunito, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 24px;
  }
  .line4 {
    margin: 15px;
    margin-top: 25px;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    .adr {
      display: flex;
      align-items: center;
      margin: 0;
      margin-right: 50px;
      width: 230px;
      height: 40px;
      .circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
  }
  @media (min-width: 576px) {
    .block {
      .picture {
        width: 500px;
        height: 500px;
      }
    }
    .block2 {
      .picture {
        width: 500px;
        height: 500px;
      }
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .cards {
      flex-direction: row;
    }
    .card {
      padding: 30px 40px;
      border-radius: 25px;
      box-shadow: 4.955px 5.781px 14.618px 0 #00000040;
      padding: 40px;
      width: 462px;
      .line1 {
        font-size: 20px;
      }
      .line2 {
        font-size: 35px;
      }
    }
    .block {
      display: flex;
      flex-direction: row;
      .picture {
        width: 500px;
        height: 500px;
      }
    }
    .block2 {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-direction: row-reverse;
    }
    .address {
      margin: 20px;
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      .addr1 {
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 1200px) {
    .block {
      .address {
        width: 600px;
      }
    }
  }
  @media (min-width: 1400px) {
  }
`;
export default Index;

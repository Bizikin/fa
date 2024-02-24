import React from "react";
import styled from "styled-components";
import map from "../../public/images/slider/slide4.png";
import Image from "next/image";

const Slider4 = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="line1">ДОСТАВКА!</div>
        <div className="line2">
          «Фабрика» рада, что вы выбираете нашу доставку!
        </div>
        <div className="line3">
          Хотим сразу рассказать о тарифах по доставке, так как блюда мы отдаем
          по честной цене, нам придется включить стоимость за доставку:
        </div>
        <div className="image2">
          <Image className="picture" src={map} alt="map" />
        </div>
        <div className="line5">
          <p className="address">Первомайская 39</p>
          <p className="phone">8 (928) 841-11-71</p>
        </div>
        <div className="line5">
          <p className="address">Переулок Кордонный 1И</p>
          <p className="phone">8 (938) 557-70-30</p>
        </div>
        <div className="line4">
          <div className="info">
            Мы также заинтересованы в классных кадрах, поэтому будем рады любому
            сотрудничеству{" "}
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
    .line5 {
      margin: 15px;
      display: flex;
      p {
        width: 250px;
        margin: 0;
        margin: 5px 0;
      }
      .address {
        color: #b48a39;
        font-family: Nunito, sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
      .phone {
        color: #000;
        font-family: Nunito, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
      }
    }
    .line4 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      .info {
        padding: 10px 5px;
        border: 1px solid #ffffde;
        border-image-slice: 1;
        /* width: 430px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
        border-image-source: linear-gradient(
          0deg,
          #b48a39,
          #ffffde,
          #d5be7f,
          #fffbef,
          #b48a39
        );
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
export default Slider4;

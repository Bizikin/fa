import React from "react";
import styled from "styled-components";
import map from "../../public/images/slider/slide3.png";
import Image from "next/image";

const Slider3 = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="line1">О ВАЖНОМ!</div>
        <div className="line2">Хотим предостеречь вас о главном!</div>
        <div className="line3">
          Заказывая блюда на доставку убедитесь, что аллергены, присутствующие в
          составе отсутствуют, либо пропишите в комментариях к заказу. Вам
          обязательно прозвонит менеджер и уточнит все ваши пожелания
        </div>
        <div className="image2">
          <Image className="picture" src={map} alt="map" />
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
export default Slider3;

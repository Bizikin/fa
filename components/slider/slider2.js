import React from "react";
import styled from "styled-components";
import map from "../../public/images/slider/slide2.png";
import Image from "next/image";

const Slider2 = () => {
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
export default Slider2;

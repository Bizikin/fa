"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { SvgFooterLogo } from "../SvgComponents";

const Footer = () => {
  return (
    <Wrapper>
      <Link href="/" className="logo">
        <SvgFooterLogo />
      </Link>
      <div className="menu">
        <Link href="contacts" className="item">
          Контакты
        </Link>
        <Link href="/" className="item">
          Меню
        </Link>
        <Link href="backet" className="item">
          Корзина
        </Link>
      </div>
      <div className="menu2">
        <Link href="/" className="item">
          Меню
        </Link>
        <Link href="about" className="item">
          О нас
        </Link>
        <Link href="/contacts" className="item">
          Контакты
        </Link>
      </div>
      <div className="contacts">
        <div className="address">Первомайская 39</div>
        <div className="phone">8 (928) 841 11 71</div>
        <div className="address">Переулок Кордонный 1И</div>
        <div className="phone">8 (938) 557-70-30</div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #333237;
  height: 100px;

  .logo {
    display: none;
  }
  .contacts {
    display: none;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .item {
      text-decoration: none;
      padding: 10px 20px;
      margin-right: 16px;
      color: #ffffff;
      border-radius: 35.163px;
      border: 1.758px solid rgba(255, 255, 255, 0.46);
      background: rgba(217, 217, 217, 0.02);
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.14),
        0px 0.879px 2.11px 0px rgba(0, 0, 0, 0.13),
        0px 3.868px 3.868px 0px rgba(0, 0, 0, 0.12),
        0px 8.615px 5.274px 0px rgba(0, 0, 0, 0.07),
        0px 15.472px 6.153px 0px rgba(0, 0, 0, 0.02),
        0px 24.086px 6.681px 0px rgba(0, 0, 0, 0);
      backdrop-filter: blur(5.626003742218018px);
      text-shadow: 0px 0.586px 4.392px rgba(0, 0, 0, 0.25);
      font-family: Nunito, sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.6s;
    }
    :hover {
      color: #000000;
      border-radius: 60.005px;
      background: #fff;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.14),
        0px 1.5px 3.6px 0px rgba(0, 0, 0, 0.13),
        0px 6.601px 6.601px 0px rgba(0, 0, 0, 0.12),
        0px 14.701px 9.001px 0px rgba(0, 0, 0, 0.07),
        0px 26.402px 10.501px 0px rgba(0, 0, 0, 0.02),
        0px 41.103px 11.401px 0px rgba(0, 0, 0, 0);
      backdrop-filter: blur(9.600797653198242px);
    }
  }
  .menu2 {
    display: none;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    height: 250px;
    .logo {
      display: flex;
      img {
        width: 300px;
      }
    }
    .contacts {
      display: flex;
      flex-direction: column;
      color: white;
      .address {
        margin: 10px;
        font-size: 14px;
      }
      .phone {
        margin: 10px;
        font-size: 24px;
      }
    }
    .menu {
      display: none;
    }
    .menu2 {
      display: flex;
      flex-direction: column;
      .item {
        text-transform: none;
        font-size: 24px;
        border: none;
        color: white;
        margin: 10px;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Footer;

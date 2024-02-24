import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deliveryModalHandler } from "../../features/user/userSlice";
import { motion } from "framer-motion";
import map from "../../public/images/map-delivery.png";
import Image from "next/image";

const DeliveryModal = () => {
  const { isModalMenu } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1200) {
      dispatch(deliveryModalHandler(false));
    }
  }, [windowWidth]);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch(deliveryModalHandler(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="modal"
        ref={wrapperRef}
      >
        <div className="content">
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
        <div className="image">
          <Image
            className="picture"
            src={map}
            width={420}
            height={410}
            alt="map"
          />
        </div>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 20, 20, 0.5);
  transition: 1s;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;

  .modal {
    display: flex;
    height: 410px;
    width: 1070px;
    box-sizing: border-box;
    border-radius: 32px;
    background: white;
  }
  .content {
    width: 650px;
    padding: 30px;
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
    width: 420px;
    object-fit: cover;
    .picture {
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
    }
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default DeliveryModal;

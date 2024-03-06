import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { modalMenuHandler } from "../../features/user/userSlice";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuModal = () => {
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
    if (windowWidth > 992) {
      dispatch(modalMenuHandler(false));
    }
  }, [windowWidth]);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch(modalMenuHandler(false));
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
        <div className="choose-wrapper">
          <Link
            className="item"
            href="/"
            onClick={() => dispatch(modalMenuHandler(false))}
          >
            <div className="choose-address">Меню</div>
          </Link>
          <Link
            className="item"
            href="/about"
            onClick={() => dispatch(modalMenuHandler(false))}
          >
            <div className="choose-address">О нас</div>
          </Link>
          <Link
            className="item"
            href="/contacts"
            onClick={() => dispatch(modalMenuHandler(false))}
          >
            <div className="choose-address">Контакты</div>
          </Link>
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 490px;
    width: 90%;
    box-sizing: border-box;
    border-radius: 74px;
    background: rgba(0, 0, 0, 0.4);
  }
  .choose-title {
    margin-bottom: 33px;
    color: #ffffff;
    text-shadow: 0 1.1px 8.5px rgba(0, 0, 0, 0.25);
    font-family: Inter, sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
  }
  .choose-address {
    margin-bottom: 31px;
    padding: 31px 46px;
    border-radius: 97px;
    border: 4.86px solid rgba(255, 255, 255, 0.46);
    background: rgba(217, 217, 217, 0.02);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.14),
      0px 2.43px 5.832px 0px rgba(0, 0, 0, 0.13),
      0px 10.693px 10.693px 0px rgba(0, 0, 0, 0.12),
      0px 23.816px 14.581px 0px rgba(0, 0, 0, 0.07),
      0px 42.772px 17.011px 0px rgba(0, 0, 0, 0.02),
      0px 66.588px 18.47px 0px rgba(0, 0, 0, 0);
    backdrop-filter: blur(15.553292274475098px);
    color: white;
    text-shadow: 0px 1.619px 12.143px rgba(0, 0, 0, 0.25);
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    transition: all 1s;
    text-align: center;
    width: 250px;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }
  .item {
    text-decoration: none;
  }
  @media (min-width: 576px) {
    .modal {
      width: 715px;
    }
    .choose-title {
      font-size: 36px;
    }
    .choose-address {
      font-size: 18px;
    }
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
export default MenuModal;

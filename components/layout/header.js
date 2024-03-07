import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { SvgHeaderLogo, SvgHeaderCart, SvgPhone } from "../SvgComponents";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import MenuModal from "../modal/MenuModal";
import {
  modalMenuHandler,
  currentAddressHandler,
} from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Header = () => {
  const [extra, setExtra] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const { isModalMenu, currentAddress } = useSelector((store) => store.user);

  const addressHandler1 = () => {
    const newCategoryId = 1;

    dispatch(
      currentAddressHandler({
        address: "Кордонный переулок 1И",
        categoryId: newCategoryId,
      })
    );
    setExtra(false);
    router.push(`/${newCategoryId}/1`);
  };

  const addressHandler2 = () => {
    const newCategoryId = 2;

    dispatch(
      currentAddressHandler({
        address: "Первомайская 39",
        categoryId: newCategoryId,
      })
    );
    setExtra(false);
    router.push(`/${newCategoryId}/1`);
  };

  return (
    <Wrapper>
      <AnimatePresence>{isModalMenu && <MenuModal />}</AnimatePresence>
      <div className="menu">
        <div className="restaurants">
          {currentAddress && <p>{currentAddress.address}</p>}
          {!currentAddress && <p>Ресторан не выбран</p>}
          <motion.div
            animate={{ rotate: extra ? 180 : 0 }}
            transition={{
              type: "spring",
              bounce: 0.5,
            }}
            className="icon"
            onClick={() => setExtra(!extra)}
          >
            <IoIosArrowDown />
          </motion.div>
          <AnimatePresence>
            {extra && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20, scale: 0.7 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ type: "spring", bounce: 0.5 }}
                className="extra"
              >
                <p className="restaurant" onClick={addressHandler1}>
                  Кордонный переулок 1И
                </p>

                <p className="restaurant" onClick={addressHandler2}>
                  Первомайская 39
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="menu">
          <Link className="link" href="/">
            Меню
          </Link>
        </div>
      </div>
      <div className="menu2" onClick={() => dispatch(modalMenuHandler(true))}>
        <GiHamburgerMenu />
      </div>
      <Link className="logo link" href="/">
        <SvgHeaderLogo />
        {/* _______________________________________________ */}
        <div className="restaurants r2">
          {currentAddress && <p>{currentAddress.address}</p>}
          {!currentAddress && <p>Ресторан не выбран</p>}
          <motion.div
            animate={{ rotate: extra ? 180 : 0 }}
            transition={{
              type: "spring",
              bounce: 0.5,
            }}
            className="icon"
            onClick={() => setExtra(!extra)}
          >
            <IoIosArrowDown />
          </motion.div>
          <AnimatePresence>
            {extra && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="extra"
              >
                <p className="restaurant" onClick={addressHandler1}>
                  Кордонный переулок 1И
                </p>
                <p className="restaurant" onClick={addressHandler2}>
                  Первомайская 39
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* _______________________________________________ */}
      </Link>
      <div className="menu">
        <Link href="/about" className="about link">
          О нас
        </Link>
        <Link href="/contacts" className="contacts link">
          Контакты
        </Link>
        <Link href="backet" className="cart link">
          <SvgHeaderCart />
        </Link>
      </div>
      <div className="menu2">
        <SvgPhone />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .menu {
    display: none;
  }
  .link {
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .restaurants {
    display: flex;
    align-items: center;
    font-size: 20px;
    position: relative;

    .icon {
      svg {
        margin: 5px;
        margin-top: 15px;
        cursor: pointer;
        font-size: 25px;
      }
    }
    .extra {
      position: absolute;
      top: 60px;
      background: white;
      padding: 10px;
      border-radius: 15px;
      z-index: 100;
      box-shadow: var(--shadow-1);
      width: 250px;
      p {
        margin: 0;
        font-size: 17px;
      }
      .restaurant {
        cursor: pointer;
        margin-top: 7px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .menu2 {
    cursor: pointer;
    svg {
      font-size: 25px;
    }
  }
  .r2 {
    width: 280px;
    display: flex;
    justify-content: center;
  }
  .link {
    text-decoration: none;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    height: 200px;
    .r2 {
      display: none;
    }
    .menu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      font-size: 24px;
      text-decoration: none;
    }
    .menu2 {
      display: none;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Header;

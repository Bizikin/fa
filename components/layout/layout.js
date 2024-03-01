import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import Backet from "./backet";
import Delivery from "./delivery";
import styled from "styled-components";
import DeliveryModal from "../modal/DeliveryModal";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Layout = (props) => {
  const { isDeliveryModal } = useSelector((store) => store.user);
  const path = usePathname();
  return (
    <>
      <AnimatePresence>{isDeliveryModal && <DeliveryModal />}</AnimatePresence>
      <Wrapper>
        <Header />
        <main>{props.children}</main>
        {!["/backet", "/done"].includes(path) && <Backet />}
        {!["/backet", "/done"].includes(path) && <Delivery />}

        <Footer />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  justify-content: space-between;
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
export default Layout;

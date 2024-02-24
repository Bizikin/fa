import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import Backet from "./backet";
import Delivery from "./delivery";
import styled from "styled-components";
import DeliveryModal from "../modal/DeliveryModal";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Layout = (props) => {
  const { isDeliveryModal } = useSelector((store) => store.user);
  return (
    <>
      <AnimatePresence>{isDeliveryModal && <DeliveryModal />}</AnimatePresence>
      <Wrapper>
        <Header />
        <main>{props.children}</main>
        <Delivery />
        <Backet />
        <Footer />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
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

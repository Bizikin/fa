import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import Backet from "./Backet";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Backet />
      <Footer />
    </Fragment>
  );
};

export default Layout;

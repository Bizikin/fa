import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";
import React from "react";
import Layout from "../components/layout/layout";
import { TextEncoder, TextDecoder } from "text-encoding";

function MyApp({ Component, pageProps }) {
  if (typeof global.TextEncoder === "undefined") {
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
  }
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;

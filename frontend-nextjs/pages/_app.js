import React from "react";
import Head from "next/head";

import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

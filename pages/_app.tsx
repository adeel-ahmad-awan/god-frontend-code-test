import React from "react";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import "../public/css/styles.css";

type MyAppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
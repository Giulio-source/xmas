import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { setAppHeight } from "../components/commons/utils";
import { Loader } from "../components/Loader/Loader";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();

    return () => {
      window.removeEventListener("resize", setAppHeight);
    };
  }, []);
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-hinto.gif" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Loader />
    </>
  );
}

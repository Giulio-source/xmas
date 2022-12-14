import type { AppProps } from "next/app";
import Head from "next/head";
import { Loader } from "../components/Loader/Loader";
import { GlobalStyle } from "../styles/GlobalStyles";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-hinto.gif" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Loader />
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="32391e2a-c29e-4431-a825-e35205101896"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
    </>
  );
}

import type { AppProps } from "next/app";
import Head from "next/head";
import { Loader } from "../components/Loader/Loader";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
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

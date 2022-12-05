import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Xmas Hinto</title>
        <meta name="description" content="xmas.hinto" />
        <link rel="shortcut icon" href="/favicon-hinto.gif" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

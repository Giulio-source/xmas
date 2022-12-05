import { Html, Head, Main, NextScript } from "next/document";
import { notoFont } from "../components/commons/Theme";

export default function Document() {
  return (
    <Html>
        <Head>
        <title>Xmas Hinto</title>
        <meta name="description" content="xmas.hinto" />
        <link rel="shortcut icon" href="/favicon-hinto.gif" />
      </Head>
      <body className={notoFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

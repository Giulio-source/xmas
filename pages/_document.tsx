import { Html, Head, Main, NextScript } from "next/document";
import { notoFont } from "../components/commons/Theme";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={notoFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

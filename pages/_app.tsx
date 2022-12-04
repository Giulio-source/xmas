import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [originRoute, setOriginRoute] = useState("");
  const router = useRouter();

  function showLoader() {
    setIsLoading(true);
    setOriginRoute(router.pathname);
  }

  function hideLoader() {
    setIsLoading(false);
  }

  useEffect(() => {
    router.events.on("routeChangeStart", showLoader);
    return () => {
      router.events.off("routeChangeStart", showLoader);
    };
  }, [router]);

  if (isLoading) {
    return <Loader onClose={hideLoader} />;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

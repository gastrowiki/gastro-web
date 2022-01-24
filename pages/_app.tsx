import "../styles/globals.css";
import { AppProps } from "next/app";

import { Header, Footer } from "navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

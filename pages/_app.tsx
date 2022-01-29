import "global/styles.css";
import { AppProps } from "next/app";

import { Header, Footer } from "navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

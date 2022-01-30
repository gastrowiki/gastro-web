import "styles/global.scss";
import { AppProps } from "next/app";

import layoutStyles from "styles/layout.module.scss";
import { Header, Footer } from "navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={layoutStyles.mainContent}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

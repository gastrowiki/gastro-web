import "styles/global.scss";
import { AppProps } from "next/app";

import layoutStyles from "styles/layout.module.scss";
import UserContextProvider from 'auth/userContextProvider'
import { Header, Footer } from "navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Header />
      <main className={layoutStyles.mainContent}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </UserContextProvider>
  );
}

export default MyApp;

import "styles/global.scss";
import { AppProps } from "next/app";

import layoutStyles from "styles/layout.module.scss";
import UserContextProvider from 'auth/userContextProvider'
import { Navigation, Footer } from "navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Navigation />
      <main className={layoutStyles.mainContent}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </UserContextProvider>
  );
}

export default MyApp;

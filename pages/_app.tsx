import "styles/global.scss";
import { AppProps, AppContext } from "next/app";

import UserContextProvider from 'auth/userContextProvider'
import layoutStyles from "styles/layout.module.scss";
import { IUser } from "common/types";
import { Navigation, Footer } from "navigation";

interface IAppProps extends AppProps {
  userFromServer?: IUser;
}

function MyApp({ Component, pageProps, userFromServer }: IAppProps) {
  return (
    <UserContextProvider userFromServer={userFromServer}>
      <Navigation />
      <main className={layoutStyles.mainContent}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </UserContextProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  let userFromServer: IUser | undefined;

  if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
    userFromServer = {
      ...ctx.res.locals.user,
      id: ctx.res.locals.user.sub,
    };
  }

  return { pageProps, userFromServer };
};

export default MyApp;

import { NextPage } from "next";
import Head from "next/head";

import { LoginPanel } from 'auth'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>LoginPage the Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginPanel />
    </>
  );
};

export default LoginPage;

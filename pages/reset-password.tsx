import { NextPage } from "next";
import Head from "next/head";

import { ResetPasswordPanel } from 'auth'

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SignupPage the Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResetPasswordPanel />
    </>
  );
};

export default SignupPage;

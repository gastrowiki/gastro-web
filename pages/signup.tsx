import { NextPage } from "next";
import Head from "next/head";

import { SignupPanel } from 'auth'

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

      <SignupPanel />
    </>
  );
};

export default SignupPage;

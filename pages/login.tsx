import Head from "next/head";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from "next/router";

import authStyles from "styles/auth.module.scss";
import { ILoginUser } from "auth/auth.types";
import { IRequestError } from "common/types";
import { Input } from "common/forms";
import { useCurrentUser } from "auth";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { login, isLoggedIn } = useCurrentUser();
  const { redirect } = router.query;

  useEffect(() => {
    if (isLoggedIn) {
      router.push(redirect as string || "/profile");
    }
  }, [isLoggedIn, redirect, router]);

  const handleSubmit = async (
    credentials: ILoginUser,
    { setErrors, setFieldError }: FormikHelpers<ILoginUser>
  ) => {
    try {
      await login(credentials);
    } catch (error: any) {
      const { message, fieldErrors }: IRequestError = error;
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("username", message);
      }
    }
  };

  return (
    <div className={authStyles.authPanel}>
      <Head>
        <title>Gastro: Login</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Login</h2>
          <Input
            name="username"
            label="Username"
            placeholder="Username / email"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <Link href="/signup">
        <a>Create an Account</a>
      </Link>
      <Link href="/forgot-password">
        <a>Forgot your password?</a>
      </Link>
    </div>
  );
};

export default LoginPage;

import Head from "next/head";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";
import { useState } from "react";

import authStyles from "styles/auth.module.scss";
import { Input } from "common/forms";
import { IForgotPassword } from "auth/auth.types";
import { IRequestError } from "common/types";
import { useCurrentUser } from "auth";

const ForgotPasswordPage: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { forgotPassword } = useCurrentUser();

  const handleSubmit = async (
    { email }: IForgotPassword,
    { setErrors, setFieldError }: FormikHelpers<IForgotPassword>
  ) => {
    try {
      await forgotPassword(email);
      setSubmitted(true);
    } catch (error) {
      const { message, fieldErrors }: IRequestError = error as any;
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("email", message);
      }
    }
  };

  return (
    <div className={authStyles.authPanel}>
      <Head>
        <title>Gastro: Forgot Password</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {submitted ? (
        <>
          <h2>Success!</h2>
          <h6>Reset instructions have been sent to your email</h6>
        </>
      ) : (
        <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
          <Form>
            <h2>Reset your password</h2>
            <Input label="Email" name="email" placeholder="Email" />
            <button type="submit">Reset</button>
          </Form>
        </Formik>
      )}
      <Link href="/login">
        <a>Return to Log In</a>
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;

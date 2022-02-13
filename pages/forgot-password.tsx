import Head from "next/head";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";

import { Input } from "common/forms";
import { IForgotPassword } from "auth/auth.types";
import { IRequestError } from "common/types";
import { userCurrentUser } from "auth";

const ForgotPasswordPage: NextPage = () => {
  const { forgotPassword } = userCurrentUser();

  const handleSubmit = async (
    { email }: IForgotPassword,
    { setErrors, setFieldError }: FormikHelpers<IForgotPassword>
  ) => {
    try {
      await forgotPassword(email);
    } catch (error: any) {
      const { message, fieldErrors }: IRequestError = error;
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("email", message);
      }
    }
  };

  return (
    <>
      <Head>
        <title>ForgotPasswordPage the Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
        <Form>
          <h2>Reset your password</h2>
          <Input label="Email" name="email" placeholder="Email" />
          <button type="submit">Reset</button>
        </Form>
      </Formik>
      <Link href="/login">
        <a>Return to Log In</a>
      </Link>
    </>
  );
};

export default ForgotPasswordPage;

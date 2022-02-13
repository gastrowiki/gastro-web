import Head from "next/head";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { IRequestError } from "common/types";
import { IResetPassword } from 'auth/auth.types'
import { Input } from "common/forms";
import { userCurrentUser } from "auth";

const SignupPage: NextPage = () => {
  const { resetPassword } = userCurrentUser();
  const { query } = useRouter();
  const { token, email } = query;

  const handleSubmit = async (
    data: IResetPassword,
    { setErrors, setFieldError }: FormikHelpers<IResetPassword>
  ) => {
    try {
      await resetPassword(data);
    } catch (error: any) {
      const { message, fieldErrors }: IRequestError = error;
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("password", message);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Gastro: Reset Your Password</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Formik
        initialValues={{
          email: "",
          password: "",
          password_verification: "",
          token: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Reset your password</h2>
          <Input
            type="password"
            label="password"
            name="password"
            placeholder="Password"
          />
          <Input
            type="password"
            name="password_verification"
            placeholder="Re-Enter Password"
          />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="token" value={token} />
          <button type="submit">Reset</button>
        </Form>
      </Formik>
      <Link href="/login">
        <a>Return to Log In</a>
      </Link>
    </>
  );
};

export default SignupPage;

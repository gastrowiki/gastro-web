import Head from "next/head";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import authStyles from "styles/auth.module.scss";
import { IRequestError } from "common/types";
import { IResetPassword } from "auth/auth.types";
import { Input } from "common/forms";
import { userCurrentUser } from "auth";

const SignupPage: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { resetPassword } = userCurrentUser();
  const { query } = useRouter();
  const token = query.token as string;
  const email = query.email as string;

  const handleSubmit = async (
    data: IResetPassword,
    { setErrors, setFieldError }: FormikHelpers<IResetPassword>
  ) => {
    try {
      await resetPassword({
        ...data,
        token,
        email,
      });
      setSubmitted(true);
    } catch (error) {
      const { message, fieldErrors }: IRequestError = error as any;
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("password", message);
      }
    }
  };

  return (
    <div className={authStyles.authPanel}>
      <Head>
        <title>Gastro: Reset Your Password</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Reset your password</h2>
      {submitted ? (
        <h5>
          Your password has been reset. You can now{" "}
          <Link href="/login">
            <a>log in</a>
          </Link>
        </h5>
      ) : (
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
      )}
      <Link href="/login">
        <a>Return to Log In</a>
      </Link>
    </div>
  );
};

export default SignupPage;

import React from "react";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { useRouter } from "next/router";

import { userCurrentUser } from "auth";
import { IRequestError } from "common/types";
import { ILoginUser } from "auth/auth.types";
import { Input } from "common/forms";

const LoginPanel = () => {
  const router = useRouter();
  const { login } = userCurrentUser();
  const { redirect } = router.query;

  const handleSubmit = async (
    credentials: ILoginUser,
    { setErrors, setFieldError }: FormikHelpers<ILoginUser>
  ) => {
    try {
      await login(credentials);
      router.push(typeof redirect === "string" ? redirect : "/");
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
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Login</h2>
          <Input name="username" label="Username" placeholder="Username / email" />
          <Input type="password" label="Password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <Link href="/signup">
        <a>Create an Account</a>
      </Link>
      <Link href="/reset-password">
        <a>Forgot your password?</a>
      </Link>
    </>
  );
};

export default LoginPanel;

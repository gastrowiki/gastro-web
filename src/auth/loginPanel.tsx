import React from "react";
import Link from "next/link";
import { Formik, FormikHelpers, Form, Field } from "formik";
import { useRouter } from "next/router";
import { server } from "common/utils";

import { userCurrentUser } from "auth";
import { ILoginUser } from "auth/auth.types";

const LoginPanel = () => {
  const router = useRouter();
  const { login } = userCurrentUser();
  const { redirect } = router.query;

  const handleSubmit = async (
    credentials: ILoginUser,
    { setFieldError }: FormikHelpers<ILoginUser>
  ) => {
    try {
      await login(credentials);
      router.push(typeof redirect === "string" ? redirect : "/");
    } catch (error: any) {
      setFieldError("username", error);
    }
  };

  const handleClick = () => {
    server.GET("/protect");
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Login</h2>
          <Field type="text" name="username" placeholder="Username / email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <Link href="/signup">
        <a>Create a new account</a>
      </Link>
    </>
  );
};

export default LoginPanel;

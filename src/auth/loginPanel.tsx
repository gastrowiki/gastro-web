import React from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { server } from "common/utils";

import { userCurrentUser } from "auth";
import { ILoginUser } from "auth/auth.types";

const LoginPanel = () => {
  const router = useRouter();
  const { login } = userCurrentUser();
  const { redirect } = router.query;

  const handleSubmit = async (credentials: ILoginUser) => {
    try {
      await login(credentials);
      if (redirect && typeof redirect === "string") {
        router.push(redirect);
      }
    } catch (error) {
      console.log(error);
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
      <button onClick={handleClick}>Protected Route</button>
    </>
  );
};

export default LoginPanel;

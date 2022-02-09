import React from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import { userCurrentUser } from 'auth'
import { ILoginUser } from 'auth/auth.types'

const LoginPanel = () => {
  const { login } = userCurrentUser()
  const router = useRouter();
  const { redirect } = router.query;

  const handleSubmit = async (credentials: ILoginUser) => {
    try {
      await login(credentials)
      if (redirect && typeof redirect === 'string') {
        router.push(redirect)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <h2>Login</h2>
        <Field type="text" name="username" placeholder="Username / email" />
        <Field type="password" name="password" placeholder="Password" />
      </Form>
    </Formik>
  );
};

export default LoginPanel;

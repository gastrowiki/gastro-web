import React from "react";
import Link from "next/link";
import { Formik, FormikHelpers, Form, Field } from "formik";
import { useRouter } from "next/router";

import { userCurrentUser } from "auth";
import { IRegisterUser } from "./auth.types";

const RegisterPanel = () => {
  const router = useRouter();
  const { register } = userCurrentUser();
  const { redirect } = router.query;

  const handleSubmit = async (
    credentials: IRegisterUser,
    { setErrors, setFieldError }: FormikHelpers<IRegisterUser>
  ) => {
    register(credentials)
      .then(() => router.push(typeof redirect === "string" ? redirect : "/"))
      .catch(({ message, fieldErrors }) => {
        if (fieldErrors) {
          setErrors(fieldErrors);
        } else {
          setFieldError("username", message);
        }
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_verification: "",
          givenName: "",
          familyName: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Create your Gastro account</h2>
          <Field type="text" name="username" placeholder="Username / email" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <Field
            type="password"
            name="password_verification"
            placeholder="Re-Enter Password"
          />
          <Field type="text" name="givenName" placeholder="First Name" />
          <Field type="text" name="familyName" placeholder="Last Name" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <Link href="/login">
        <a>Log In</a>
      </Link>
    </>
  );
};

export default RegisterPanel;

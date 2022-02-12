import React from "react";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";
import { useRouter } from "next/router";
import debounce from "lodash/debounce";

import { IRegisterUser } from "./auth.types";
import { Input } from "common/forms";
import { server } from "common/utils";
import { userCurrentUser } from "auth";

const checkUsernameAvailability = debounce(async (username: string) => {
  if (!username) {
    return;
  }
  try {
    await server.GET<boolean>(`/usernameAvailability?username=${username}`);
  } catch (e: any) {
    return e.fieldErrors?.username || e.message;
  }
}, 300);

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
        {({ setFieldError, handleChange }) => (
          <Form>
            <h2>Create your Gastro account</h2>
            <Input
              type="text"
              label="username"
              name="username"
              validate={checkUsernameAvailability}
              placeholder="Username / email"
            />
            <Input
              type="email"
              label="email"
              name="email"
              placeholder="Email"
            />
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
            <Input
              type="text"
              label="First Name"
              name="givenName"
              placeholder="First Name"
            />
            <Input
              type="text"
              label="Last Name"
              name="familyName"
              placeholder="Last Name"
            />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <Link href="/login">
        <a>Log In</a>
      </Link>
    </>
  );
};

export default RegisterPanel;

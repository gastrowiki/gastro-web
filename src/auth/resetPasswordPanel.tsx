import React from "react";
import Link from "next/link";
import { Formik, FormikHelpers, Form } from "formik";

import { Input } from "common/forms";
import { userCurrentUser } from "auth";

interface IResetPassword {
  email: string;
}

const RegisterPanel = () => {
  const { resetPassword } = userCurrentUser();

  const handleSubmit = async (
    { email }: IResetPassword,
    { setErrors, setFieldError }: FormikHelpers<IRegisterUser>
  ) => {
    try {
      await resetPassword(email);
    } catch ({ message, fieldErrors }) {
      if (fieldErrors) {
        setErrors(fieldErrors);
      } else {
        setFieldError("email", message);
      }
    }
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

export default RegisterPanel;

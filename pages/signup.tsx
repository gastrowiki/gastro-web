import Head from "next/head";
import Link from "next/link";
import debounce from "lodash/debounce";
import { Formik, FormikHelpers, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";

import authStyles from "styles/auth.module.scss";
import { IRegisterUser } from "auth/auth.types";
import { IRequestError } from "common/types";
import { Input } from "common/forms";
import { serverRequest } from "common/utils";
import { userCurrentUser } from "auth";

const checkUsernameAvailability = debounce(async (username: string) => {
  if (!username) {
    return;
  }
  try {
    await serverRequest.GET<boolean>(`/username-availability?username=${username}`);
  } catch (error: any) {
    const { message, fieldErrors }: IRequestError = error;
    return fieldErrors ? fieldErrors.username : message;
  }
}, 300);

const SignupPage: NextPage = () => {
  const router = useRouter();
  const { register } = userCurrentUser();
  const { redirect } = router.query;

  const handleSubmit = async (
    credentials: IRegisterUser,
    { setErrors, setFieldError }: FormikHelpers<IRegisterUser>
  ) => {
    try {
      await register(credentials)
      router.push(typeof redirect === "string" ? redirect : "/")
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
    <div className={authStyles.authPanel}>
      <Head>
        <title>Gastro: Create Your Account</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Input
            type="text"
            label="username"
            name="username"
            validate={checkUsernameAvailability}
            placeholder="Username / email"
          />
          <Input type="email" label="email" name="email" placeholder="Email" />
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
      </Formik>
      <Link href="/login">
        <a>Log In</a>
      </Link>
    </div>
  );
};

export default SignupPage;

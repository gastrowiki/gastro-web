import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import UserInfo from "profile/UserInfo";
import { IUser } from "common/types";
import { serverRequestSSR } from "common/utils";
import { userCurrentUser } from "auth";

interface IProfilePageProps {
  userProfile: IUser;
}

const ProfilePage = ({ userProfile }: IProfilePageProps) => {
  const { isLoggedIn } = userCurrentUser();
  const router = useRouter();

  if (!isLoggedIn) {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>
          Gastro: {userProfile.given_name} {userProfile.family_name}&apos;s
          Profile
        </title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserInfo />
      <ul>
        <li>Personal Info</li>
        <li>Engagement Stats / Revenue</li>
        <li>Your Videos</li>
        <li>Your Articles</li>
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const userProfile = await serverRequestSSR(ctx).GET("/me");
    return {
      props: { userProfile },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default ProfilePage;

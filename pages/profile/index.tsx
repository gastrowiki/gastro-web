import Head from "next/head";

import { userCurrentUser } from "auth";
import UserInfo from 'profile/UserInfo'

const ProfilePage = () => {
  const { user } = userCurrentUser();

  return (
    <>
      <Head>
        <title>Gastro: {user.given_name} {user.family_name}&apos;s Profile</title>
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

export default ProfilePage;

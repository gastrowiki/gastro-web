import { NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

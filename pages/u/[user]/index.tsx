import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <Head>
        <title>Gastro: UserPage</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>{user}</h3>
    </>
  );
};

export default UserPage;

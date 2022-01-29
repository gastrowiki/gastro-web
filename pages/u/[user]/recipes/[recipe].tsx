import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const Recipe: NextPage = () => {
  const router = useRouter();
  const { user, recipe } = router.query;
  return (
    <>
      <Head>
        <title>Gastro: Recipe</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>
        {user}s recipe: {recipe}
      </h3>
    </>
  );
};

export default Recipe;

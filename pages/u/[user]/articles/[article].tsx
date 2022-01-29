import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { user, article } = router.query;
  return (
    <>
      <Head>
        <title>Gastro: ArticlePage</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>
        {user}s recipe: {article}
      </h3>
    </>
  );
};

export default ArticlePage;

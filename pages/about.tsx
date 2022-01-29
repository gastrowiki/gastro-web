import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboutPage the Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>AboutPage the Gastro Cooperative</h1>
      <h5>Mission</h5>
      <h5>Values</h5>
      <h5>Code of Conduct</h5>
      <h5>How to Contribute</h5>
      <h5>Contributor Roles</h5>
      <h5>Governance</h5>
      <h5>Project Proposals and Lifecycle</h5>
    </>
  );
};

export default AboutPage;

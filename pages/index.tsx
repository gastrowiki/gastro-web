import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
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

      <h1>Welcome to Gastro!</h1>
      <h5>User</h5>
      <ul>
        <li>
          <Link href="/u/velomash">
            <a>Velomash</a>
          </Link>
        </li>
        <li>
          <Link href="/u/velomash/recipes/enchiladas">
            <a>Enchiladas</a>
          </Link>
        </li>
        <li>
          <Link href="/u/velomash/articles/where-to-eat-in-sf">
            <a>Where to eat in SF</a>
          </Link>
        </li>
      </ul>
      <h5>Profile</h5>
      <ul>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
      <h5>Ingredients</h5>
      <ul>
        <li>
          <Link href="/i/salt">
            <a>Salt</a>
          </Link>
        </li>
      </ul>
      <h5>Methods</h5>
      <ul>
        <li>
          <Link href="/m/grill">
            <a>Grilling</a>
          </Link>
        </li>
      </ul>
      <h5>Equipment</h5>
      <ul>
        <li>
          <Link href="/e/wok">
            <a>Wok</a>
          </Link>
        </li>
      </ul>
      <h5>Search</h5>
      <ul>
        <li>
          <Link href="/s?q=enchiladas">
            <a>Search for Enchiladas</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;

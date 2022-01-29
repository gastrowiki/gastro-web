import { NextPage } from "next";
import Head from "next/head";

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
          <a href="/u/velomash">Velomash</a>
        </li>
        <li>
          <a href="/u/velomash/recipes/enchiladas">Enchiladas</a>
        </li>
        <li>
          <a href="/u/velomash/articles/where-to-eat-in-sf">
            Where to eat in SF
          </a>
        </li>
      </ul>
      <h5>Profile</h5>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
      <h5>Ingredients</h5>
      <ul>
        <li>
          <a href="/i/salt">Salt</a>
        </li>
      </ul>
      <h5>Methods</h5>
      <ul>
        <li>
          <a href="/m/grill">Grilling</a>
        </li>
      </ul>
      <h5>Equipment</h5>
      <ul>
        <li>
          <a href="/e/wok">Wok</a>
        </li>
      </ul>
      <h5>Search</h5>
      <ul>
        <li>
          <a href="/s?q=enchiladas">Search for Enchiladas</a>
        </li>
      </ul>
    </>
  );
};

export default HomePage;

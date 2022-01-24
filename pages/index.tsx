import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gastro Cooperative</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Gastro!
        </h1>
        <h4>Homepage</h4>
        <ul>
          <li>Featured Recipes</li>
          <li>Featured Articles</li>
          <li>Featured Chefs</li>
        </ul>
      </main>
    </div>
  )
}

export default Home

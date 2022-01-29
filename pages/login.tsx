import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Login.module.css'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login the Gastro Cooperative</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>
      </main>
    </div>
  )
}

export default Login

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

const UserPage: NextPage = () => {
  const router = useRouter()
  const { user } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Gastro: UserPage</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>{user}</h3>
      </main>
    </div>
  )
}

export default UserPage
